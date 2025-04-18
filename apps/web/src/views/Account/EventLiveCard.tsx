import { LinkButton } from '@repo/ui';

const mockEvent = {
    id: 1,
    name: {
        url: 'hackarena_2_5',
        text: 'HackArena 2.5',
    },
    description: 'This is a live event',
    date: '2023-10-01',
    time: '12:00 PM',
    location: 'Online',
};

export function EventLiveCard() {
    return (
        <div className="flex flex-col both-corners-clip bg-primary p-4">
            <h2 className="subtitle text-background">Wydarzenie live</h2>
            <p className="text-background">
                {mockEvent.name.text} jest live! Wejdź na stronę wydarzenia po
                więcej informacji.
            </p>
            <LinkButton
                href={`/konto/wydarzenie/${mockEvent.name.url}`}
                className="mt-4"
                secondary
                fullWidth
            >
                Wejdź
            </LinkButton>
        </div>
    );
}
