export enum EventComponents {
    HEADER = 'header',
    HIGHLIGHTS = 'highlights',
    HEADER_TEXT_SECTION = 'headerTextSection',
    RESULTS = 'results',
    SPONSORS = 'sponsors',
    PHOTOS = 'photos',
    PRIZES = 'prizes',
    AGENDA = 'agenda',
}

export const mockData: { wydarzenia: EventData[] } = {
    wydarzenia: [
        {
            name: {
                url: 'hackarena_1_0',
                text: 'HackArena 1.0',
            },
            thumbnail: '/photos/hackarena_1/thumbnail.jpg',
            registration: {
                date: {
                    start: new Date('2024-05-01T10:00:00'),
                    end: new Date('2024-05-31T23:59:59'),
                },
            },
            description:
                'HackArena 1.0 to pierwsza edycja hackathonu organizowanego przez Koło Naukowe "init". W wydarzeniu wzięło udział 15 osób, które stworzyły 6 botów.',
            timeDate: {
                start: new Date('2024-06-02T10:00:00'),
                end: new Date('2024-06-02T18:00:00'),
            },
            blocks: [
                {
                    type: EventComponents.HEADER,
                    data: {
                        title: 'Hack{{ icon }}Arena 1.0',
                        icon: '/lightning.svg',
                        description:
                            'HackArena 1.0 to pierwsza edycja hackathonu organizowanego przez Koło Naukowe "init". W wydarzeniu wzięło udział 15 osób, które stworzyły 6 botów.',
                        timeDate: {
                            start: new Date('2024-06-02T10:00:00'),
                            end: new Date('2024-06-02T18:00:00'),
                        },
                        location: 'SGGW w Warszawie',
                        thumbnail: '/photos/hackarena_1/thumbnail.jpg',
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Zadanie',
                        text: 'Drużyny dostały zadanie stworzenie bota do gry typu <strong>Bomberman.</strong> Do wykonania zadania należało wykorzystać <strong>język Python </strong> i należało się zmieścić w czasie <strong>8 godzin.</strong>',
                    },
                },
                {
                    type: EventComponents.RESULTS,
                    data: {
                        text: 'Podium pierwszej edycji HackAreny',
                        teams: ['Wild Pythons', 'Essence of Code'],
                    },
                },
                {
                    type: EventComponents.PHOTOS,
                    data: [
                        '/photos/hackarena_1/DSC_6107.jpg',
                        '/photos/hackarena_1/DSC_6131.jpg',
                        '/photos/hackarena_1/DSC_6132.jpg',
                        '/photos/hackarena_1/DSC_6144.jpg',
                        '/photos/hackarena_1/DSC_6158.jpg',
                        '/photos/hackarena_1/DSC_6165.jpg',
                        '/photos/hackarena_1/DSC_6172.jpg',
                        '/photos/hackarena_1/DSC_6173.jpg',
                        '/photos/hackarena_1/DSC_6184.jpg',
                        '/photos/hackarena_1/DSC_6187.jpg',
                        '/photos/hackarena_1/DSC_6190.jpg',
                        '/photos/hackarena_1/DSC_6222.jpg',
                        '/photos/hackarena_1/DSC_6226.jpg',
                        '/photos/hackarena_1/DSC_6228.jpg',
                        '/photos/hackarena_1/DSC_6235.jpg',
                        '/photos/hackarena_1/DSC_6242.jpg',
                        '/photos/hackarena_1/DSC_6245.jpg',
                        '/photos/hackarena_1/DSC_6248.jpg',
                        '/photos/hackarena_1/DSC_6251.jpg',
                        '/photos/hackarena_1/DSC_6268.jpg',
                        '/photos/hackarena_1/DSC_6284.jpg',
                        '/photos/hackarena_1/DSC_6294.jpg',
                        '/photos/hackarena_1/DSC_6588.jpg',
                        '/photos/hackarena_1/DSC_6590.jpg',
                        '/photos/hackarena_1/DSC_6597.jpg',
                        '/photos/hackarena_1/DSC_6605.jpg',
                        '/photos/hackarena_1/DSC_6606.jpg',
                        '/photos/hackarena_1/DSC_6608.jpg',
                        '/photos/hackarena_1/DSC_6613.jpg',
                        '/photos/hackarena_1/DSC_6623.jpg',
                        '/photos/hackarena_1/DSC_6629.jpg',
                        '/photos/hackarena_1/DSC_6631.jpg',
                        '/photos/hackarena_1/DSC_6638.jpg',
                        '/photos/hackarena_1/DSC_6639.jpg',
                        '/photos/hackarena_1/DSC_6640.jpg',
                        '/photos/hackarena_1/DSC_6642.jpg',
                        '/photos/hackarena_1/DSC_6645.jpg',
                        '/photos/hackarena_1/DSC_6650.jpg',
                        '/photos/hackarena_1/DSC_6652.jpg',
                        '/photos/hackarena_1/DSC_6654.jpg',
                        '/photos/hackarena_1/DSC_6664.jpg',
                        '/photos/hackarena_1/DSC_6669.jpg',
                    ],
                },
            ],
        },
        {
            name: {
                url: 'hackarena_2_0',
                text: 'HackArena 2.0',
            },
            thumbnail: '/photos/hackarena_2/thumbnail.jpg',
            registration: {
                date: {
                    start: new Date('2024-09-01T10:00:00'),
                    end: new Date('2024-10-20T23:59:59'),
                },
            },
            timeDate: {
                start: new Date('2024-10-26T10:00:00'),
                end: new Date('2024-10-27T18:00:00'),
            },
            description:
                'Druga edycja hackathonu organizowanego przez Koło Naukowe "init". W tej edycji wzięło udział 16 drużyn, a zwycięzcy otrzymali nagrody o łącznej wartości 6000 zł.',
            blocks: [
                {
                    type: EventComponents.HEADER,
                    data: {
                        title: 'Hack{{ icon }}Arena 2.0',
                        icon: '/lightning.svg',
                        description:
                            'Druga edycja hackathonu organizowanego przez Koło Naukowe "init". W tej edycji wzięło udział 16 drużyn, a zwycięzcy otrzymali nagrody o łącznej wartości 6000 zł.',
                        timeDate: {
                            start: new Date('2024-10-26T10:00:00'),
                            end: new Date('2024-10-27T18:00:00'),
                        },
                        location: 'SGGW w Warszawie',
                        thumbnail: '/photos/hackarena_2/thumbnail.jpg',
                    },
                },
                {
                    type: EventComponents.HIGHLIGHTS,
                    data: {
                        video: '/videos/HackArena_2_0_Highlights.mp4',
                        placeholder:
                            '/videos/HackArena_2_0_Highlights_placeholder.jpg',
                        link: {
                            text: 'Pobierz i zagraj w grę z HackAreny 2.0',
                            href: 'https://github.com/INIT-SGGW/HackArena2.0-MonoTanks',
                        },
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Zadanie',
                        text: 'Zadaniem uczestników HackArena 2.0 było <strong>stworzenie bota</strong> do gry <strong>MonoTanks.</strong> W maksymalnie <strong>3 osobowych grupach</strong> mieli 2 dni na implementację algorytmu zdolnego do samodzielnego przeprowadzenia rozgrywki. Swoje rozwiązania pisali w <strong>Python, Java, C#, C++, JavaScript, TypeScript, Go i Rust.</strong>',
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Format turnieju',
                        text: 'Turniej został rozegrany <strong>w trzech rundach.</strong> W każdej rundzie uczestnicy zmagali się w <strong>pojedynkach 1v1v1v1.</strong> W pierwszym etapie, przydział do poszczególnych meczów był rozstrzygnięty poprzez <strong>losowanie.</strong> Następnie w celu przejścia do kolejnych faz, bot danej drużyny musiał się znaleźć <strong>w top 2 aktualnie rozgrywanego starcia.</strong> W wielkim finale, spośród 4 finalistów, został wyłoniony <strong>mistrz HackAreny 2.0.</strong>',
                    },
                },
                {
                    type: EventComponents.RESULTS,
                    data: {
                        text: 'Cztery najlepsze drużyny HackAreny 2.0',
                        teams: [
                            'Trzy Kwaterki',
                            'Agresywne Tostery',
                            'Azbestmasters',
                            'Młodzi Sarmaci',
                        ],
                    },
                },
                {
                    type: EventComponents.SPONSORS,
                    data: {
                        text: 'Dziękujemy naszym sponsorom za wsparcie',
                        sponsors: [
                            {
                                name: 'MevSpace',
                                logo: '/sponsors/mevspace.svg',
                                href: 'https://mevspace.com/',
                            },
                            {
                                name: 'Kocham Skakać',
                                logo: '/sponsors/kochamskakac.png',
                                href: 'https://kochamskakac.pl/',
                            },
                            {
                                name: 'CosmoEye',
                                logo: '/sponsors/cosmoeye.svg',
                                href: 'https://cosmoeye.ai/',
                            },
                            {
                                name: 'Bempresa',
                                logo: '/sponsors/bempresa.png',
                                href: 'http://bempresa.com/',
                            },
                        ],
                        partners: [
                            {
                                name: 'Fabbrica',
                                logo: '/sponsors/fabbrica.webp',
                                href: 'https://www.fabbrica.pl/',
                            },
                            {
                                name: 'Uland',
                                logo: '/sponsors/uland.png',
                                href: 'https://www.uland.pl/',
                            },
                            {
                                name: 'Coffee Heroes Rostery',
                                logo: '/sponsors/coffee_heroes_roastery.png',
                                href: 'https://coffee-heroes-roastery.pl/',
                            },
                        ],
                        mediaPatronage: [
                            {
                                name: 'Grupa StudentNews',
                                logo: '/sponsors/studentnews.png',
                                href: 'https://grupa.studentnews.pl/',
                            },
                            {
                                name: 'Mam Startup',
                                logo: '/sponsors/mamstartup.svg',
                                href: 'https://mamstartup.pl/',
                            },
                            {
                                name: 'Just Join IT',
                                logo: '/sponsors/justjoin.png',
                                href: 'https://justjoin.it/',
                            },
                            {
                                name: 'Crossweb',
                                logo: '/sponsors/crossweb.svg',
                                href: 'https://crossweb.pl/',
                            },
                            {
                                name: 'ScrumDo',
                                logo: '/sponsors/scrumdo.png',
                                href: 'https://scrumdo.pl/',
                            },
                        ],
                        patronage: [
                            {
                                name: 'Patronat honorowy Burmistrza dzielnicy Ursynów',
                                logo: '/sponsors/ursynow.png',
                                href: 'https://ursynow.um.warszawa.pl/',
                            },
                            {
                                name: 'Patronat honorowy Rektora Szkoły Głównej Gospodarstwa Wiejskiego',
                                logo: '/sponsors/sggw.svg',
                                href: 'https://www.sggw.edu.pl/',
                            },
                        ],
                    },
                },
                {
                    type: EventComponents.PHOTOS,
                    data: [
                        '/photos/hackarena_2/DSC06700.jpg',
                        '/photos/hackarena_2/DSC06783.jpg',
                        '/photos/hackarena_2/DSC_7289.jpg',
                        '/photos/hackarena_2/DSC06827.jpg',
                        '/photos/hackarena_2/DSC06831.jpg',
                        '/photos/hackarena_2/DSC06845.jpg',
                        '/photos/hackarena_2/DSC06884.jpg',
                        '/photos/hackarena_2/DSC06894.jpg',
                        '/photos/hackarena_2/DSC06897.jpg',
                        '/photos/hackarena_2/DSC_7373.jpg',
                        '/photos/hackarena_2/DSC_7374.jpg',
                        '/photos/hackarena_2/DSC_7411.jpg',
                        '/photos/hackarena_2/DSC_7414.jpg',
                        '/photos/hackarena_2/DSC06956.jpg',
                        '/photos/hackarena_2/DSC06973.jpg',
                        '/photos/hackarena_2/DSC07003.jpg',
                        '/photos/hackarena_2/DSC07029.jpg',
                        '/photos/hackarena_2/DSC_7314.jpg',
                        '/photos/hackarena_2/DSC_7669.jpg',
                        '/photos/hackarena_2/DSC07038.jpg',
                        '/photos/hackarena_2/DSC07069.jpg',
                        '/photos/hackarena_2/DSC07072.jpg',
                        '/photos/hackarena_2/DSC07075.jpg',
                        '/photos/hackarena_2/DSC07076.jpg',
                        '/photos/hackarena_2/DSC07077.jpg',
                        '/photos/hackarena_2/DSC07080.jpg',
                        '/photos/hackarena_2/DSC07085.jpg',
                        '/photos/hackarena_2/DSC07089.jpg',
                        '/photos/hackarena_2/DSC07092.jpg',
                        '/photos/hackarena_2/DSC07094.jpg',
                        '/photos/hackarena_2/DSC07095.jpg',
                        '/photos/hackarena_2/DSC07099.jpg',
                        '/photos/hackarena_2/DSC07100.jpg',
                        '/photos/hackarena_2/DSC07103.jpg',
                        '/photos/hackarena_2/DSC07116.jpg',
                        '/photos/hackarena_2/DSC07104.jpg',
                        '/photos/hackarena_2/DSC07162.jpg',
                        '/photos/hackarena_2/DSC07166.jpg',
                        '/photos/hackarena_2/DSC07459.jpg',
                        '/photos/hackarena_2/DSC_7500.jpg',
                        '/photos/hackarena_2/DSC07513.jpg',
                        '/photos/hackarena_2/DSC07545.jpg',
                        '/photos/hackarena_2/DSC07564.jpg',
                        '/photos/hackarena_2/DSC07586.jpg',
                        '/photos/hackarena_2/DSC07592.jpg',
                        '/photos/hackarena_2/DSC07593.jpg',
                        '/photos/hackarena_2/DSC07616.jpg',
                        '/photos/hackarena_2/DSC07718.jpg',
                        '/photos/hackarena_2/DSC_7285.jpg',
                        '/photos/hackarena_2/DSC_7308.jpg',
                        '/photos/hackarena_2/DSC_7751.jpg',
                        '/photos/hackarena_2/DSC_7793.jpg',
                        '/photos/hackarena_2/DSC_7800.jpg',
                        '/photos/hackarena_2/DSC_7835.jpg',
                        '/photos/hackarena_2/DSC_7858.jpg',
                        '/photos/hackarena_2/DSC_7860.jpg',
                        '/photos/hackarena_2/DSC07761.jpg',
                        '/photos/hackarena_2/DSC07816.jpg',
                        '/photos/hackarena_2/DSC07857.jpg',
                        '/photos/hackarena_2/DSC_7955.jpg',
                        '/photos/hackarena_2/DSC07870.jpg',
                        '/photos/hackarena_2/DSC07882.jpg',
                        '/photos/hackarena_2/DSC_7457.jpg',
                        '/photos/hackarena_2/DSC06782.jpg',
                        '/photos/hackarena_2/DSC07551.jpg',
                    ],
                },
            ],
        },
        {
            name: {
                url: 'hackarena_2_5',
                text: 'HackArena 2.5',
            },
            thumbnail: '/photos/hackarena_2_5/thumbnail.jpg',
            registration: {
                date: {
                    start: new Date('2025-04-21T10:00:00'),
                    end: new Date('2025-05-04T23:59:59'),
                },
            },
            description:
                'Trzecia odsłona HackAreny w bardziej kameralnym wydaniu. Uczestnicy z 8 zakwalifikowanych drużyn, będą mieli do dyspozycji 8 godzin na stworzenie bota, który stanie do walki o zwycięstwo w turnieju.',
            timeDate: {
                start: new Date('2025-05-17T10:00:00'),
                end: new Date('2025-05-17T18:00:00'),
            },
            blocks: [
                {
                    type: EventComponents.HEADER,
                    data: {
                        title: 'Hack{{ icon }}Arena 2.5',
                        icon: '/lightning.svg',
                        description:
                            'Trzecia odsłona HackAreny w bardziej kameralnym wydaniu. Uczestnicy z 8 zakwalifikowanych drużyn, będą mieli do dyspozycji 8 godzin na stworzenie bota, który stanie do walki o zwycięstwo w turnieju.',
                        timeDate: {
                            start: new Date('2025-05-17T10:00:00'),
                            end: new Date('2025-05-17T18:00:00'),
                        },
                        location: 'SGGW w Warszawie',
                        thumbnail: '/photos/hackarena_2_5/thumbnail.jpg',
                    },
                },
                {
                    type: EventComponents.PRIZES,
                    data: {
                        text: 'Wszystko na jedną kartę. Zwycięzca zgarnia wszystko!',
                        prizes: [
                            {
                                prizeList: [
                                    'SteelSeries Rival 5',
                                    'SteelSeries QcK Edge Large',
                                ],
                                position: 1,
                            },
                        ],
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Zadanie',
                        text: 'Zadaniem uczestników HackAreny 2.5 będzie stworzenie <strong>bota do gry</strong> stworzonej przez członków KN "init". W zespołach do 3 osób będziecie mieli 8 godzin na stworzenie swojego rozwiązania. Do wyboru będą języki: <strong>Python, Java, C#, C++, JavaScript, TypeScript oraz Rust</strong>. Dokładniejsze zasady zostaną ogłoszone w dniu wydarzenia.',
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Format turnieju',
                        text: 'Turniej zostanie rozegrany <strong>w trzech rundach</strong>, z których każda będzie składać się z emocjonujących <strong>pojedynków 1v1</strong>. Uczestnicy staną do bezpośredniej rywalizacji, testując skuteczność swoich botów. <strong>Ćwierćfinały</strong> rozpoczną się od <strong>losowania par</strong>, które zdecyduje o przydziale do poszczególnych meczów.',
                    },
                },
                {
                    type: EventComponents.AGENDA,
                    data: {
                        days: [
                            {
                                title: 'Dzień 1',
                                events: [
                                    {
                                        time: '10:00',
                                        text: 'Rejestracja uczestników',
                                    },
                                    {
                                        time: '11:00',
                                        text: 'Rozpoczęcie HackAreny 2.5',
                                    },
                                    {
                                        time: '19:00',
                                        text: 'Zakończenie HackAreny 2.5',
                                    },
                                ],
                            },
                            {
                                title: 'Dzień II  Niedziela 27.10',
                                events: [
                                    {
                                        time: '09:00',
                                        text: 'Start dnia II',
                                    },
                                    {
                                        time: '11:00',
                                        text: 'Lunch - catering',
                                    },
                                    {
                                        time: '15:00',
                                        text: 'Pizza',
                                    },
                                    {
                                        time: '18:00',
                                        text: 'Zakończenie pracy',
                                    },
                                    {
                                        time: '19:00',
                                        text: [
                                            'Turniej HackArena 2.0',
                                            'Oficjalne zakończenie',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            name: {
                url: 'gamejam',
                text: 'HackArena GameJam',
            },
            thumbnail: '/photos/gamejam/thumbnail.png',
            registration: {
                date: {
                    start: new Date('2025-04-01T10:00:00'),
                    end: new Date('2025-04-27T10:00:00'),
                },
                url: 'https://itch.io/jam/hackarena-game-jam',
            },
            description:
                'Weź udział w HackArena GameJam! Stwórz jak najlepszy projekt gry i rywalizuj z innymi zespołami o wygraną. Wydarzenie skierowane jest zarówno do osób rozpoczynających swoją przygodę z gamedevem, jak i zapalonych wyjadaczy. Na zwycięzców czekają wyjątkowe nagrody!',
            color: '#26B9DB',
            eventLogo: '/gamejam_logo.svg',
            timeDate: {
                start: new Date('2025-04-28T10:00:00'),
                end: new Date('2025-05-04T23:59:00'),
            },
            blocks: [
                {
                    type: EventComponents.HEADER,
                    data: {
                        title: 'HackArena{{ icon }}GameJam',
                        icon: '/controler.svg',
                        description:
                            'Weź udział w HackArena GameJam! Stwórz jak najlepszy projekt gry i rywalizuj z innymi zespołami o wygraną. Wydarzenie skierowane jest zarówno do osób rozpoczynających swoją przygodę z gamedevem, jak i zapalonych wyjadaczy. Na zwycięzców czekają wyjątkowe nagrody!',
                        timeDate: {
                            start: new Date('2025-04-28T10:00:00'),
                            end: new Date('2025-05-04T23:59:00'),
                        },
                        location: 'Online',
                        thumbnail: '/photos/gamejam/thumbnail.png',
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Zadanie',
                        text: 'Zadaniem uczestników jest <strong>stworzenie gry komputerowej o określonych parametrach,</strong> uwzględniając motyw przewodni ujawniony w trakcie wydarzenia. <strong>W maksymalnie 4 osobowych drużynach, uczestnicy dostaną tydzień</strong> na stworzenie gry, która zostanie potem oceniona przez jury oraz społeczność akademicką w głosowaniu.',
                    },
                },
                {
                    type: EventComponents.HEADER_TEXT_SECTION,
                    data: {
                        title: 'Co i gdzie',
                        text: 'Szczegóły, zasady oraz hasło przewodnie konkursu znajdują się <strong>na stronie itch.io,</strong> gdzie uczestnicy prześlą swoje projekty do oceny. Więcej informacji po kliknięciu w link poniżej.',
                        link: {
                            text: 'Przejdź do strony wydarzenia',
                            href: 'https://itch.io/jam/hackarena-game-jam',
                        },
                    },
                },
            ],
        },
    ],
};

export type EventComponent<T> = {
    type: EventComponents;
    data: T;
};

export type HighlightsType = {
    video: string;
    placeholder: string;
    link?: {
        text: string;
        href: string;
    };
};

export type HeaderTextSectionType = {
    title: string;
    text: string;
    link?: {
        text: string;
        href: string;
    };
};

export type ResultsType = {
    text: string;
    teams: string[];
};

export type SponsorsType = {
    text: string;
    sponsors: {
        name: string;
        logo: string;
        href: string;
    }[];
    partners: {
        name: string;
        logo: string;
        href: string;
    }[];
    mediaPatronage: {
        name: string;
        logo: string;
        href: string;
    }[];
    patronage: {
        name: string;
        logo: string;
        href: string;
    }[];
};

export type PrizesType = {
    text: string;
    prizes: {
        prizeList: string[];
        position: number;
    }[];
};

export type PhotosType = string[];

export type HeaderType = {
    title: string;
    icon: string;
    description: string;
    timeDate: {
        start: Date;
        end: Date;
    };
    location: string;
    thumbnail: string;
};

export type AgendaType = {
    days: {
        title: string;
        events: {
            time: string;
            text: string | string[];
        }[];
    }[];
};

export type EventData = {
    name: {
        url: string;
        text: string;
    };
    description: string;
    thumbnail: string;
    registration: {
        date: {
            start: Date;
            end: Date;
        };
        url?: string;
    };
    color?: string;
    eventLogo?: string;
    timeDate: {
        start: Date;
        end: Date;
    };
    blocks: EventComponent<
        | HeaderType
        | HighlightsType
        | HeaderTextSectionType
        | ResultsType
        | SponsorsType
        | PhotosType
        | PrizesType
        | AgendaType
    >[];
};
