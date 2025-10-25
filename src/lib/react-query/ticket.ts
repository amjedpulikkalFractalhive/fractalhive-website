"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { handleClientError } from "../utils";
import { CreateTicket, ResponseData, Ticket } from "../validations";

export function useTicket() {
    const useCreate = () => {
        return useMutation({
            onMutate: () => {
                const toastId = toast.loading("Sending your message...");
                return { toastId };
            },
            mutationFn: async (values: CreateTicket) => {
                const res = await axios.post<ResponseData<Ticket>>(
                    "/api/tickets",
                    values
                );
                return res.data;
            },
            onSuccess: (_, __, { toastId }) => {
                toast.success("Message sent successfully", { id: toastId });
            },
            onError: (err, _, ctx) => {
                return handleClientError(err, ctx?.toastId);
            },
        });
    };

    return {
        useCreate,
    };
}
