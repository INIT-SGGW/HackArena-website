import { PageSection } from '@repo/ui';
import { FAQType } from '../../utils/mockData';
import { useState } from 'react';
import Image from 'next/image';

type Props = {
    data: FAQType;
};

export function FAQ({ data }: Props) {
    return (
        <PageSection>
            <div className="page-width flex flex-col items-start gap-8">
                <h2 className="title">FAQ</h2>
                <div className="flex flex-col gap-4 w-full">
                    {data.map((question, index) => (
                        <FAQItem
                            key={index}
                            question={question.question}
                            answer={question.answer}
                        />
                    ))}
                </div>
            </div>
        </PageSection>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full p-[4px] bg-secondary-200 both-corners-clip"
            style={{ '--clip-size': '12px' } as React.CSSProperties}
        >
            <div
                className="flex flex-col both-corners-clip w-full bg-background"
                style={{ '--clip-size': '18px' } as React.CSSProperties}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="cursor-pointer px-6 py-4 inline-flex justify-between items-center gap-3"
                >
                    <h3 className="text-lg text-left font-semibold ">
                        {question}
                    </h3>
                    <Image
                        src="/chevron.svg"
                        alt="chevron"
                        width={25}
                        height={25}
                        className={`${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                <div
                    className={`w-full text-secondary-100 ${isOpen ? 'h-full' : 'h-0'}`}
                >
                    <p
                        className={`px-6 pb-4 [&>a]:text-primary`}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                </div>
            </div>
        </div>
    );
}
