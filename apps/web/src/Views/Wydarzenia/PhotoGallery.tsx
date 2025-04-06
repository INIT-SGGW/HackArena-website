import { PageSection } from '@repo/ui';
import { PhotosType } from '../../utils/mockData';
import Image from 'next/image';
import {
  Dispatch,
  SetStateAction,
  TouchEvent,
  useEffect,
  useState,
} from 'react';

type Props = {
  data: PhotosType;
};

export function PhotoGallery({ data }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <PageSection>
      <div className="page-width flex flex-col gap-8 items-center">
        <Carousel
          photos={data}
          currentPhoto={currentPhoto}
          showCarousel={showCarousel}
          setCurrentPhoto={setCurrentPhoto}
          setShowCarousel={setShowCarousel}
        />
        <div className="relative w-full">
          <h2 className="text-5xl text-primary font-bold russo-one z-2 bg-background w-min m-auto px-12">
            Galeria
          </h2>
          <div className="absolute w-full h-[4px] bg-primary top-[50%] -translate-y-[50%] left-0 -z-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((photo, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentPhoto(index);
                setShowCarousel(true);
              }}
              className="bg-secondary-300 both-corners-clip p-2 cursor-pointer"
              style={{ '--clip-size': '15px' } as React.CSSProperties}
            >
              <Image
                src={photo}
                width={400}
                height={400}
                loading="lazy"
                alt={`Photo ${index + 1}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ '--clip-size': '33px' } as React.CSSProperties}
                className="w-full h-auto m-auto both-corners-clip"
              />
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

type CarouselProps = {
  photos: PhotosType;
  currentPhoto: number;
  showCarousel: boolean;
  setCurrentPhoto: Dispatch<SetStateAction<number>>;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
};

function Carousel({
  photos,
  currentPhoto,
  showCarousel,
  setCurrentPhoto,
  setShowCarousel,
  ...props
}: CarouselProps) {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (showCarousel) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCarousel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCarousel(false);
      }

      if (event.key === 'ArrowLeft') {
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
      }

      if (event.key === 'ArrowRight') {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowCarousel]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => Math.min(prev + 1, photos.length - 1));
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    setTouchStartX(e.touches[0]?.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (!e.touches[0]) return;

    const moveX = e.touches[0].clientX - touchStartX;
    setTouchMoveX(moveX);
  };
  const handleTouchEnd = () => {
    setIsDragging(false);

    if (touchMoveX < -50) {
      nextPhoto();
    } else if (touchMoveX > 50) {
      prevPhoto();
    }

    setTouchMoveX(0);
  };

  return (
    <div
      {...props}
      className={`h-full w-full fixed top-0 left-0 z-1000 bg-background ${showCarousel ? 'visible' : 'hidden pointer-events-none'}`}
    >
      {/* Controls */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
        <Image
          src="/cross-white.svg"
          width={36}
          height={36}
          alt="Close"
          className=" fixed top-4 right-4 cursor-pointer pointer-events-auto"
          onClick={() => setShowCarousel(false)}
        />
        <Image
          src="/arrow.svg"
          width={40}
          height={40}
          alt="Previous"
          className="fixed top-[50%] left-4 rotate-180 -translate-y-[50%] cursor-pointer pointer-events-auto invisible md:visible"
          onClick={() =>
            setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)
          }
        />
        <Image
          src="/arrow.svg"
          width={40}
          height={40}
          alt="Next"
          className="fixed top-[50%] right-4 -translate-y-[50%] cursor-pointer pointer-events-auto invisible md:visible"
          onClick={() => setCurrentPhoto((currentPhoto + 1) % photos.length)}
        />
      </div>

      {/* Images */}
      <div
        style={{ transform: `translateX(calc(-${currentPhoto * 100}vw)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full h-full flex items-center pointer-events-none transition-transform duration-300 ease-in-out "
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="w-full min-w-screen h-full flex items-center justify-center snap-start"
          >
            <Image
              className={`max-w-[100%] md:max-w-[80%] max-h-[80%] object-contain pointer-events-auto`}
              src={photo}
              loading="lazy"
              alt={`Photo ${currentPhoto + 1}`}
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
