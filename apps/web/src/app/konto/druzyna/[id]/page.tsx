import { Page } from '@repo/ui';
import { NoDescriptionEvents } from '../../../../views/Wydarzenia/NoDescriptionEvents';

const mockData = {
    name: 'HackArena Team 1',
    events: [
        {
            name: {
                url: 'hackarena_2_0',
                text: 'HackArena 2.0',
            },
            thumbnail: '/photos/hackarena_2/thumbnail.jpg',
        },
        {
            name: {
                url: 'hackarena_1_0',
                text: 'HackArena 1.0',
            },
            thumbnail: '/photos/hackarena_1/thumbnail.jpg',
        },
    ],
    members: [
        {
            name: 'Jan Kowalski',
            email: 'jan.kowalski@sadf.asdf',
            verified: true,
            captain: true,
        },
        {
            name: 'Karolina Nowak',
            email: 'karolina.nowak@asdf.asdf',
            verified: true,
        },
        {
            email: 'karolina.nowak@asdf.asdf',
            verified: false,
        },
    ],
};

export default function TeamPage() {
    return (
        <Page>
            <div className="flex flex-col gap-10 page-width mx-auto">
                <h1 className="title text-left">{mockData.name}</h1>
                <div className="flex flex-col gap-5">
                    <h2 className="subtitle text-left">Członkowie drużyny</h2>
                    <div>
                        <ol className="w-full max-w-[700px] mx-auto">
                            {mockData.members.map((member, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col gap-2 mb-5 last:mb-0"
                                >
                                    <div className="flex gap-5 justify-between">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-lg font-semibold">
                                                {member.name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {member.email}
                                            </span>
                                        </div>
                                        <div className="flex gap-3">
                                            {member.captain && (
                                                <span className="text-blue-500">
                                                    Kapitan
                                                </span>
                                            )}
                                            {member.verified ? (
                                                <span className="text-green-500">
                                                    Zweryfikowany
                                                </span>
                                            ) : (
                                                <span className="text-error">
                                                    Niezweryfikowany
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="subtitle text-left">Wydarzenia</h2>

                    <div className="sm:p-4">
                        {mockData.events.length > 0 ? (
                            <div
                                className={`flex flex-col md:flex-row gap-5 md:gap-10 ${mockData.events.length > 1 ? '!flex-col !gap-10' : ''}`}
                            >
                                {mockData.events.length > 0 && (
                                    <NoDescriptionEvents
                                        events={mockData.events}
                                        compact
                                    />
                                )}
                            </div>
                        ) : (
                            <p className="text-center">
                                Nie brałeś jeszcze udziału w żadnych
                                wydarzeniach.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Page>
    );
}
