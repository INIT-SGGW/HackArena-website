import { CrossedTitle, InfoBox, LinkButton, Page } from '@repo/ui';
import { SendSolution } from '../../../../../../views/Account/Event/SendSolution';

const apiWrappery = [
    {
        name: 'Python',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-Python',
    },
    {
        name: 'Java',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-MonoTanks-Java',
    },
    {
        name: 'C#',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-CSharp',
    },
    {
        name: 'C++',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-Cxx',
    },
    {
        name: 'JavaScript',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-JS',
    },
    {
        name: 'Typescript',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-TS',
    },
    {
        name: 'Rust',
        href: 'https://github.com/INIT-SGGW/HackArena2.5-StereoTanks-Rust',
    },
];

export default function EventPage() {
    return (
        <Page>
            <div className="flex flex-col gap-15 page-width mx-auto">
                <h1 className="title text-left">HackArena 2.5</h1>
                <InfoBox
                    title="Instrukcja"
                    text="Zapoznaj się z instrukcją wydarzenia, aby dowiedzieć się więcej o zasadach i przebiegu rywalizacji. W razie pytań skontaktuj się z organizatorami."
                    buttonText="Otwórz instrukcję"
                    href="/assets/instrukcja.pdf"
                    newTab
                />
                <section className="flex flex-col gap-10">
                    <CrossedTitle title="Gra" />
                    <p>
                        Grę na HackArena 2.5 możecie pobrać z repozytoriów
                        GitHub. Pobierzcie najnowszą wersję z zakładki
                        "Releases" i rozpakujcie ją na swoim komputerze.
                        Pamiętajcie żeby wybrać wersję zgodną z waszym systemem
                        operacyjnym (Windows, Linux, MacOS) i architekturą (x64,
                        arm64).
                    </p>
                    <LinkButton
                        href="https://github.com/INIT-SGGW/HackArena2.5-StereoTanks/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                    >
                        StereoTanks
                    </LinkButton>
                </section>
                <section className="flex flex-col gap-10">
                    <CrossedTitle title="API Wrappery" />
                    <div className="flex flex-col gap-5">
                        <p>
                            Boty będziecie pisali za pomocą przygotowanych przez
                            nas API wrapperów. Wybierzcie swój język
                            programowania, pobierzcie wrappera i zacznijcie
                            pisać swojego bota!
                        </p>
                        <ul className="flex flex-col gap-2 list-disc list-inside marker:text-primary ml-6">
                            {apiWrappery.map((api, index) => (
                                <li key={index}>
                                    <a
                                        key={api.name}
                                        href={api.href}
                                        className="text-primary text-xl font-bold hover:underline"
                                    >
                                        {api.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="flex flex-col gap-10">
                    <CrossedTitle title="Przesyłanie rozwiązań" />
                    <p>
                        Poniżej możecie przesłać swoje rozwiązania. Pamiętajcie,
                        że możecie przesyłać rozwiązania tylko w formacie .zip.
                        Wybierzcie plik i kliknijcie "Prześlij".
                    </p>
                    <SendSolution />
                </section>
            </div>
        </Page>
    );
}
