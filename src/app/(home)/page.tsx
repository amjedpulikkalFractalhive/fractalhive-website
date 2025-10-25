import { GeneralShell } from "@/components/globals/layouts";
import { Culture, Landing, WhyUs } from "@/components/home";

export default function Page() {
    return (
        <>
            <Landing />
            <GeneralShell
                classNames={{
                    mainWrapper:
                        "bg-gradient-to-br from-white via-slate-50 to-blue-50 ",
                    innerWrapper: "py-4",
                }}
            >
                <WhyUs />
            </GeneralShell>
            <Culture />
        </>
    );
}
