"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTicket } from "@/lib/react-query";
import { CreateTicket, createTicketSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface PageProps {
    style: "normal" | "inverted";
}

export function ContactForm({ style = "inverted" }: PageProps) {
    const bg = style === "inverted" ? "bg-background" : "bg-transparent";

    const form = useForm<CreateTicket>({
        resolver: zodResolver(createTicketSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const { useCreate } = useTicket();
    const { mutateAsync: createTicket, isPending: isCreating } = useCreate();

    const handleSubmit = async (values: CreateTicket) => {
        await createTicket(values);
        form.reset();
    };

    return (
        <Form {...form}>
            <form
                className="overflow-hidden rounded-xl bg-muted/50 p-4 transition-colors duration-300 hover:bg-accent/5 md:rounded-3xl md:p-8"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <div className="space-y-6">
                    <div className="flex flex-col gap-6 md:flex-row">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={bg}
                                            disabled={isCreating}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={bg}
                                            disabled={isCreating}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={bg}
                                            type="email"
                                            disabled={isCreating}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="tel"
                                            className={bg}
                                            disabled={isCreating}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        minRows={5}
                                        className={bg}
                                        disabled={isCreating}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className="group w-full bg-accent text-accent-foreground transition-all duration-300 hover:bg-accent/90"
                        size="lg"
                        disabled={isCreating}
                    >
                        <span>Send Message</span>
                        <Icons.Send className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </div>
            </form>
        </Form>
    );
}
