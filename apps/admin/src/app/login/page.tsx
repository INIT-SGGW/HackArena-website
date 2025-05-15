import { Page } from '@repo/ui';
import { LoginForm } from '../../views/login/LoginForm';

export default function LoginPage() {
    return (
        <Page>
            <h1 className="title justify-self-center mb-4">Logowanie</h1>
            <LoginForm />
        </Page>
    );
}
