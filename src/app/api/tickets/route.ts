import { CResponse, handleError } from "@/lib/utils";
import { createTicketSchema } from "@/lib/validations";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parsed = createTicketSchema.parse(body);

        return CResponse({ message: "CREATED", data: parsed });
    } catch (err) {
        return handleError(err);
    }
}
