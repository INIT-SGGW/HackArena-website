import { Button, CrossedTitle, Page } from '@repo/ui';
import { NoDescriptionEvents } from '../../../../views/Wydarzenia/NoDescriptionEvents';
import { MembersCard } from '../../../../views/Account/Team/MembersCard';
import { LeaveTeamCard } from '../../../../views/Account/Team/LeaveTeamCard';

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
            <div className="flex flex-col gap-15 page-width mx-auto">
                <h1 className="title text-left">{mockData.name}</h1>
                <div className="flex flex-col gap-10">
                    <CrossedTitle title="Członkowie drużyny" />
                    <MembersCard />
                </div>
                <div className="flex flex-col gap-5">
                    <CrossedTitle title="Wydarzenia" />

                    <div className="py-5">
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
                <LeaveTeamCard />
            </div>
        </Page>
    );
}
