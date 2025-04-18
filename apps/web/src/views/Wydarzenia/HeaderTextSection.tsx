import { ArrowLink, PageSection } from '@repo/ui';
import { HeaderTextSectionType as HeaderTextSectionType } from '../../utils/mockData';

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
                <h2 className="title">{data.title}</h2>
                <p
                    dangerouslySetInnerHTML={{ __html: data.text }}
                    className="text-2xl text-secondary-100 [&>strong]:text-text"
                />
                {data.link && (
                    <ArrowLink
                        text={data.link.text}
                        className="font-bold text-xl"
                        style={{ color: `${colorWithFallback}` }}
                        href={data.link.href}
                        color={colorWithFallback}
                    />
                )}
            </div>
        </PageSection>
    );
}
