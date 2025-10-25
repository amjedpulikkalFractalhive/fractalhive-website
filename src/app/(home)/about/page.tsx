import { About, CoreValues, Culture, Mission } from "@/components/about";
import { Header } from "@/components/globals/header";
import { GeneralShell } from "@/components/globals/layouts";
import { Connect } from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our company and values",
};

export default function Page() {
    return (
        <>
            {/* <Header title="About Us" /> */}
            <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/50">
                <About title="Our Story" />
                <Mission />
                <CoreValues />
                <Culture />
            </div>
            <GeneralShell
                classNames={{
                    mainWrapper:
                        "bg-gradient-to-br from-white via-blue-50 to-purple-50/50",
                }}
            >
                <Connect />
            </GeneralShell>
        </>
    );
}
