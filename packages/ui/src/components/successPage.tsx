import { Page } from './page';
import { SocialLinks } from './socialLinks';

type Props = {
    title: string;
    text: string;
};

export function SuccessPage({ title, text }: Props) {
    return (
        <Page
            className="flex flex-col items-center justify-center gap-8 text-center min-h-[600px]"
            paddingTop="0px"
        >
            <div className="flex flex-col gap-4 items-center">
                <h1 className="title text-center">{title}</h1>
                <p className="text-center">{text}</p>
                <SocialLinks className="mt-8 w-max" color="#fff" size={30} />
            </div>
        </Page>
    );
}
