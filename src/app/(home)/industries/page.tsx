import { Header } from "@/components/globals/header";
import { Industries } from "@/components/industries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries",
    description:
        "Discover the industries we serve and how we drive innovation across key sectors",
};

export default function Page() {
    return (
        <>
            {/* <Header title="Industries" /> */}
            <Industries />
        </>
    );
}
