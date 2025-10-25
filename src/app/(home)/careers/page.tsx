import { CareersPage } from "@/components/careers";
import { Header } from "@/components/globals/header";
import { GeneralShell } from "@/components/globals/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our team and help shape the future",
};

export default function Page() {
    return (
        <>
            {/* <Header
                title="Careers"
                imageUrl="https://picsum.photos/seed/12/1920/1080"
            /> */}
            <GeneralShell>
                <CareersPage />
            </GeneralShell>
        </>
    );
}
