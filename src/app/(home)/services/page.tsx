import { Header } from "@/components/globals/header";
import { GeneralShell } from "@/components/globals/layouts";
import { Services } from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore the range of services we offer to help your business thrive",
};

export default function Page() {
    return (
        <>
            {/* <Header
                title="Services"
                imageUrl="https://picsum.photos/seed/14/1920/1080"
            /> */}

            <GeneralShell>
                <Services />
            </GeneralShell>
        </>
    );
}
