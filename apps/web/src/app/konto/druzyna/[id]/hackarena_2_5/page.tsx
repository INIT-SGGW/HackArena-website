'use client';

import { CrossedTitle, LinkButton, Page } from '@repo/ui';

const scores = [
    {
        teamName: 'Trzy Kwaterki',
        score: 2876,
        submissionDate: '07.05.2025, 15:47',
        wildCard: true,
        classified: true,
    },
    {
        teamName: 'Tomasz Beton',
        score: 2876,
        submissionDate: '11.05.2025, 22:07',
        wildCard: true,
        classified: true,
    },
    {
        teamName: 'Młodzi Sarmaci',
        score: 3066,
        submissionDate: '05.05.2025, 23:32',
        wildCard: false,
        classified: true,
    },
    {
        teamName: 'Wild Pythons',
        score: 3066,
        submissionDate: '06.05.2025, 11:04',
        wildCard: false,
        classified: true,
    },
    {
        teamName: 'mobbyn',
        score: 3084,
        submissionDate: '08.05.2025, 02:30',
        wildCard: false,
        classified: true,
    },
    {
        teamName: 'trzeci do pary',
        score: 3104,
        submissionDate: '12.05.2025, 00:59',
        wildCard: false,
        classified: true,
    },
    {
        teamName: 'Azbestmasters',
        score: 3280,
        submissionDate: '05.05.2025, 21:04',
        wildCard: false,
        classified: true,
    },
    {
        teamName: 'mandaryniarze',
        score: 3620,
        submissionDate: '10.05.2025, 11:45',
        wildCard: false,
        classified: true,
    },
];

const results = [
    {
        stage: 'Ćwierćfinały',
        games: [
            {
                teams: [
                    {
                        name: 'mandaryniarze',
                        score: 9,
                    },
                    {
                        name: 'Młodzi Sarmaci',
                        score: 0,
                    },
                ],
                replaysFile: 'mandaryniarze_mlodzi_sarmaci.zip',
            },
            {
                teams: [
                    {
                        name: 'Trzy Kwaterki',
                        score: 9,
                    },
                    {
                        name: 'Tomasz Beton',
                        score: 0,
                    },
                ],
                replaysFile: 'tomasz_beton_trzy_kwaterki.zip',
            },
            {
                teams: [
                    {
                        name: 'azbestmasters',
                        score: 0,
                    },
                    {
                        name: 'Wild Pythons',
                        score: 9,
                    },
                ],
                replaysFile: 'azbestmasters_wild_pythons.zip',
            },
            {
                teams: [
                    {
                        name: 'mobbyn',
                        score: 8,
                    },
                    {
                        name: 'trzeci do pary',
                        score: 1,
                    },
                ],
                replaysFile: 'mobbyn_trzeci_do_pary.zip',
            },
        ],
    },
    {
        stage: 'Półfinały',
        games: [
            {
                teams: [
                    {
                        name: 'Trzy Kwaterki',
                        score: 9,
                    },
                    {
                        name: 'mandaryniarze',
                        score: 0,
                    },
                ],
                replaysFile: 'mandaryniarze_trzy_kwaterki.zip',
            },
            {
                teams: [
                    {
                        name: 'mobbyn',
                        score: 0,
                    },
                    {
                        name: 'Wild Pythons',
                        score: 9,
                    },
                ],
                replaysFile: 'mobbyn_wild_pythons.zip',
            },
        ],
    },
    {
        stage: 'Finał',
        games: [
            {
                teams: [
                    {
                        name: 'Trzy Kwaterki',
                        score: 6,
                    },
                    {
                        name: 'Wild Pythons',
                        score: 3,
                    },
                ],
                replaysFile: 'trzy_kwaterki_wild_pythons.zip',
            },
        ],
    },
];

export default function HackArena2_5() {
    return (
        <Page>
            <div className="flex flex-col gap-15 page-width mx-auto">
                <h1 className={'title text-4xl sm:text-5xl'}>HackArena 2.5</h1>
                <div className="flex flex-col gap-10">
                    <CrossedTitle title="Zadanie kwalifikacyjne" />
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">#</th>
                                <th className="px-4 py-2 text-left">
                                    Nazwa drużyny
                                </th>
                                <th className="px-4 py-2">Data wysłania</th>
                                <th className="px-4 py-2">Wynik</th>
                            </tr>
                            {scores.map((score, index) => (
                                <tr key={index} className={`border-t`}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">
                                        {score.teamName}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        {score.submissionDate}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        {score.score}
                                    </td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
                <div className="flex flex-col gap-10">
                    <CrossedTitle title="Powtórki meczy" />
                    <p>
                        Poniżej możecie ściągnąć powtórki meczy z HackArena 2.5.
                        Żeby je odtworzyć, będziecie potrzebowali
                        zainstalowanego klienta{' '}
                        <a
                            className="text-primary"
                            href="https://github.com/INIT-SGGW/HackArena2.5-StereoTanks/releases/tag/v1.0.2"
                            target="_blank"
                        >
                            StereoTanks
                        </a>
                        .
                        <br />
                        <br />
                        Po ściągnięciu pliku .zip z meczami, rozpakujcie go i
                        wrzućcie jego zawartość do folderu „Replays” w katalogu
                        gry (jeśli nie ma takiego folderu, po prostu go
                        stwórzcie).
                        <br />
                        <br />
                        Odpalcie grę, wejdźcie w „Watch Replay” i gotowe -
                        możecie oglądać akcję jeszcze raz!
                        <br />
                        <br />
                        Miłego seansu! 😎
                    </p>
                    {results.map((stage, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-5 items-center"
                        >
                            <h2 className="text-2xl text-primary text-center">
                                {stage.stage}
                            </h2>
                            <table className="table-auto max-w-[800px] w-full">
                                <thead>
                                    {stage.games.map((game, index) => (
                                        <tr
                                            key={index}
                                            className={`border-t first:border-t-0 hover:bg-secondary-100/30 cursor-pointer`}
                                            onClick={() => {
                                                window.open(
                                                    `/assets/${game.replaysFile}`,
                                                );
                                            }}
                                            title={`Pobierz powtórkę`}
                                        >
                                            <td className="px-4 py-2 text-center w-1/3">
                                                {game.teams[0]?.name}
                                            </td>
                                            <td className="px-4 py-2 text-center w-1/3">
                                                {game.teams[0]?.score} -{' '}
                                                {game.teams[1]?.score}
                                            </td>
                                            <td className="px-4 py-2 text-center w-1/3">
                                                {game.teams[1]?.name}
                                            </td>
                                        </tr>
                                    ))}
                                </thead>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}
