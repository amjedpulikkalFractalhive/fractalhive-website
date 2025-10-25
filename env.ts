import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {},
    client: {
        NEXT_PUBLIC_DEPLOYMENT_URL: z
            .string()
            .url("NEXT_PUBLIC_DEPLOYMENT_URL must be a valid URL")
            .optional(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_DEPLOYMENT_URL: process.env.NEXT_PUBLIC_DEPLOYMENT_URL,
    },
});
