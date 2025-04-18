import React, { Suspense } from 'react';
import { Page } from '@repo/ui';
import VerificationCard from '../../../../views/Account/VerificationCard';

export default function MailVerificationPage(): React.JSX.Element {
    return (
        <Suspense>
            <Page
                className="flex flex-col items-center justify-center gap-8 text-center min-h-[600px]"
                paddingTop="0px"
            >
                <VerificationCard />
            </Page>
        </Suspense>
    );
}
