import { PageSection } from '@repo/ui';
import { PhotosType } from '../../utils/mockData';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type Props = {
    data: PhotosType;
};

export function PhotoGallery({ data }: Props) {
    const [showCarousel, setShowCarousel] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(0);

    // Limit the number of photos to show in the grid (next one will show that there is more)
    const numberOfPhotosToShow = 15;
    const photosToShow = data.slice(0, numberOfPhotosToShow);
    const lastPhotoToShow = data[numberOfPhotosToShow + 1];

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
                    <h2 className="title z-2 bg-background w-min m-auto px-12">
                        Galeria
                    </h2>
                    <div className="absolute w-full h-[4px] bg-primary top-[50%] -translate-y-[50%] left-0 -z-1" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {photosToShow.map((photo, index) => (
                        <Photo
                            photo={photo}
                            alt={`Photo ${index + 1}`}
                            setCurrentPhoto={() => setCurrentPhoto(index)}
                            setShowCarousel={() => setShowCarousel(true)}
                            key={index}
                        />
                    ))}
                    {lastPhotoToShow && (
                        <Photo
                            photo={lastPhotoToShow}
                            alt={`Photo ${numberOfPhotosToShow + 1}`}
                            setCurrentPhoto={() =>
                                setCurrentPhoto(numberOfPhotosToShow + 1)
                            }
                            setShowCarousel={() => setShowCarousel(true)}
                            key={numberOfPhotosToShow + 1}
                            photosLeft={data.length - numberOfPhotosToShow}
                        />
                    )}
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
    const bottomCarouselRef = useRef<HTMLDivElement>(null);
    const mainCarouselRef = useRef<HTMLDivElement>(null);

    const [isDraggingBottomCarousel, setIsDraggingBottomCarousel] =
        useState(false);

    useEffect(() => {
        if (showCarousel && bottomCarouselRef.current) {
            const carouselWidth = bottomCarouselRef.current.offsetWidth;
            const photoElement = bottomCarouselRef.current
                .children[0] as HTMLImageElement;
            if (!photoElement) return;
            const photoWidth = photoElement.offsetWidth;

            bottomCarouselRef.current.scrollTo({
                left:
                    photoWidth * currentPhoto +
                    photoWidth / 2 -
                    carouselWidth / 2,
                behavior: 'smooth',
            });
        }
    }, [currentPhoto, showCarousel, bottomCarouselRef]);

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
                setCurrentPhoto(
                    (prev) => (prev - 1 + photos.length) % photos.length,
                );
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

    useEffect(() => {
        const container = bottomCarouselRef.current;
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        if (!container) return;

        const handleMouseDown = (e: MouseEvent) => {
            setIsDraggingBottomCarousel(true);
            isDown = true;
            container.classList.add('active');
            startX = e.pageX;
            scrollLeft = container.scrollLeft;
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (Math.abs(startX - e.pageX) < 5) {
                setIsDraggingBottomCarousel(false);
            }
            isDown = false;
            container.classList.remove('active');
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();

            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1; // scroll speed multiplier
            container.scrollLeft = scrollLeft - walk;
        };

        // Attach event listeners
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up
        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [bottomCarouselRef]);

    const nextPhoto = () => {
        setCurrentPhoto((prev) => Math.min(prev + 1, photos.length - 1));
    };

    const prevPhoto = () => {
        setCurrentPhoto((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        let touchStartX = 0;
        let touchMoveX = 0;
        let isDragging = false;

        const container = mainCarouselRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            if (!e.touches[0]) return;
            isDragging = true;
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging || !e.touches[0]) return;
            const moveX = e.touches[0].clientX - touchStartX;
            touchMoveX = moveX;
        };

        const handleTouchEnd = () => {
            isDragging = false;

            if (touchMoveX < -30) {
                nextPhoto();
            } else if (touchMoveX > 30) {
                prevPhoto();
            }

            touchMoveX = 0;
        };

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [mainCarouselRef, photos.length]);

    return (
        <div
            {...props}
            className={`h-full w-full fixed flex flex-col pb-6 items-center justify-between max-h-screen top-0 left-0 z-1000 bg-background ${showCarousel ? 'visible' : 'hidden pointer-events-none'} select-none`}
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
                        setCurrentPhoto(
                            (currentPhoto - 1 + photos.length) % photos.length,
                        )
                    }
                />
                <Image
                    src="/arrow.svg"
                    width={40}
                    height={40}
                    alt="Next"
                    className="fixed top-[50%] right-4 -translate-y-[50%] cursor-pointer pointer-events-auto invisible md:visible"
                    onClick={() =>
                        setCurrentPhoto((currentPhoto + 1) % photos.length)
                    }
                />
            </div>

            {/* Images */}
            <div
                style={{
                    transform: `translateX(calc(-${currentPhoto * 100}vw)`,
                }}
                ref={mainCarouselRef}
                className="w-full h-full flex items-center pointer-events-none transition-transform duration-300 ease-in-out "
            >
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="w-full min-w-screen h-[80vh] flex items-center justify-center snap-start"
                    >
                        <Image
                            className={`h-[90%] object-contain pointer-events-auto`}
                            src={photo}
                            loading="lazy"
                            alt={`Photo ${currentPhoto + 1}`}
                            width={1280}
                            height={720}
                        />
                    </div>
                ))}
            </div>
            <div
                ref={bottomCarouselRef}
                className="w-full h-max flex overflow-x-auto no-scrollbar"
            >
                {photos.map((photo, index) => (
                    <Image
                        src={photo}
                        alt={index.toString()}
                        width={80}
                        height={80}
                        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 10vw, 5vw"
                        key={index}
                        className={`rounded-lg cursor-pointer lg:w-[6vw] active:cursor-grabbing p-1 object-cover`}
                        draggable={false}
                        onClick={(e) => {
                            if (isDraggingBottomCarousel) return;
                            setCurrentPhoto(index);
                            e.currentTarget.parentElement?.scrollTo({
                                left:
                                    e.currentTarget.offsetWidth * index +
                                    e.currentTarget.offsetWidth / 2 -
                                    e.currentTarget.parentElement?.offsetWidth /
                                        2,
                                behavior: 'smooth',
                            });
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

type PhotoProps = {
    photo: string;
    alt: string;
    setCurrentPhoto: () => void;
    setShowCarousel: () => void;
    photosLeft?: number;
};

function Photo({
    photo,
    alt,
    setCurrentPhoto,
    setShowCarousel,
    photosLeft,
}: PhotoProps) {
    return (
        <div
            onClick={() => {
                setCurrentPhoto();
                setShowCarousel();
            }}
            className="bg-secondary-300 both-corners-clip p-1 md:p-1.5 cursor-pointer relative"
            style={{ '--clip-size': '15px' } as React.CSSProperties}
        >
            <Image
                src={photo}
                width={400}
                height={400}
                alt={alt}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={
                    window.innerWidth < 768
                        ? ({ '--clip-size': '25px' } as React.CSSProperties)
                        : ({ '--clip-size': '33px' } as React.CSSProperties)
                }
                className="w-full h-auto m-auto both-corners-clip"
            />
            {photosLeft && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white text-2xl font-bold">
                    <p>+{photosLeft} zdjęć</p>
                </div>
            )}
        </div>
    );
}
