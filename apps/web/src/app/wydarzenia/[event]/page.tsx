import { title } from 'process';
import { Builder } from '../../../views/Wydarzenia/Builder';
import { Metadata } from 'next';
import { mockData } from '../../../utils/mockData';

type Props = {
  params: Promise<{ event: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { event } = await params;

  const eventData = mockData.wydarzenia.find((item) => item.name.url === event);
  if (!eventData) {
    return {
      title: 'Wydarzenia | HackArena',
      description: `Hackarena to miejsce dla pasjonatów technologii. Weź udział w hackathonie, rozwijaj swoje umiejętności i zdobądź cenne nagrody!`,
    };
  }

  return {
    title: `${eventData.name.text} | HackArena`,
    description: eventData.description,
  }
}

export default function WydarzeniaPage() {
  return (
    <div className="w-full flex flex-col pb-30">
      <Builder />
    </div>
  );
}
