import { Page } from '@repo/ui';
import { SolutionsTable } from '../views/Solutions/SolutionsTable';

export default function Home() {
    return (
        <Page>
            <div className="w-full page-width flex flex-col gap-10 items-center justify-center mx-auto">
                {/* <h1 className="text-4xl russo-one text-primary">Admin panel</h1> */}
                <SolutionsTable />
            </div>
        </Page>
    );
}
