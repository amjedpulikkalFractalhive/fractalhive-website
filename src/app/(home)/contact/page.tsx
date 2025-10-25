import { ContactInfo, MapFrame } from "@/components/contact";
import { ContactForm } from "@/components/globals/forms";
import { Header } from "@/components/globals/header";
import { GeneralShell } from "@/components/globals/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with our team",
};

export default function Page() {
    return (
        <>
            {/* <Header
                title="Contact Us"
                imageUrl="https://picsum.photos/seed/11/1920/1080"
            /> */}

            <GeneralShell>
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="basis-1/2">
                        <ContactForm style="inverted" />
                    </div>

                    <ContactInfo />
                </div>

                <MapFrame />
            </GeneralShell>
        </>
    );
}
