"use client";
import React, { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [state, handleSubmit] = useForm("xqayeyvg");
    if (state.succeeded) {
        return (
            <div className={"col-span-6"}>
                <h1 className={"text-center text-2xl"}>Thank you for your message. I will get back to you soon.</h1>
            </div>
        );
    }

    return (
        <Card className={"col-span-6 mx-auto max-w-5xl w-full gap-12"}>
            <CardHeader>
                <CardTitle className={"text-3xl font-medium text-red-300"}>🚀 Let’s Work Together</CardTitle>
                <h2 className="text-gray-300 mt-1 text-base">Use the form to drop me a message, or reach out directly via email. I’ll get back to you as soon as possible.</h2>
            </CardHeader>
            <CardContent className={"w-full"}>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input name="Name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input name="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Textarea name="Message" placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <Button type="submit">Send</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Contact;
