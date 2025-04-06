import { PageSection } from '@repo/ui';
import { HeaderTextSectionType as HeaderTextSectionType } from '../../utils/mockData';
import Link from 'next/link';

type Props = {
  color?: string;
  data: HeaderTextSectionType;
};

export function HeaderTextSection({ color, data }: Props) {
  const colorWithFallback =
    color ||
    getComputedStyle(document.documentElement).getPropertyValue(
      '--color-primary',
    );

  return (
    <PageSection>
      <div className="page-width flex flex-col items-start gap-8">
        <h2 className="text-5xl text-primary font-bold russo-one">
          {data.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-2xl text-secondary-100 [&>strong]:text-text"
        />
        {data.link && (
          <Link
            href={data.link.href}
            className="flex items-center gap-4"
            target="__blank"
            rel="noopener noreferrer"
          >
            <svg
              width="35"
              height="24"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.2405 24L48.3608 24L59.7595 12L43.6393 12L32.2405 24Z"
                fill={colorWithFallback}
              />
              <path
                d="M2.56538e-05 24L16.1203 24L27.519 12L11.3988 12L2.56538e-05 24Z"
                fill={colorWithFallback}
              />
              <path
                d="M32.2405 -4.61086e-07L48.3608 -4.98255e-07L59.7595 12L43.6393 12L32.2405 -4.61086e-07Z"
                fill={colorWithFallback}
              />
              <path
                d="M2.67029e-05 -3.86749e-07L16.1203 -4.23918e-07L27.519 12L11.3988 12L2.67029e-05 -3.86749e-07Z"
                fill={colorWithFallback}
              />
            </svg>
            <span className="text-xl text-primary font-bold">
              {data.link.text}
            </span>
          </Link>
        )}
      </div>
    </PageSection>
  );
}
