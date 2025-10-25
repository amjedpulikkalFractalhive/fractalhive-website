import { Header } from "@/components/globals/header";
import { GeneralShell } from "@/components/globals/layouts";
import { Products } from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "Explore our range of products and solutions",
};

export default function Page() {
    return (
        <>
            {/* <Header
                title="Products"
                imageUrl="https://picsum.photos/seed/products/1920/1080"
            /> */}

            <GeneralShell>
                <Products />
            </GeneralShell>
        </>
    );
}
