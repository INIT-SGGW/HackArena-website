import { Page } from '@repo/ui';
import { AddTeamMemberForm } from '../../../../../views/Account/Team/AddTeamMemberForm';

export default function AddTeamMemberPage() {
    return (
        <Page>
            <h1 className="title justify-self-center mb-4">Dodaj członka</h1>
            <AddTeamMemberForm />
        </Page>
    );
}
