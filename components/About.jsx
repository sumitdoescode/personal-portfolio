import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { inter } from "@/app/layout";
import { poppins } from "@/app/layout";

const About = () => {
    return (
        <Card className={"col-span-6 lg:col-span-3"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium text-red-300"}>About me</CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className={`text-2xl font-medium leading-relaxed text-gray-300 ${poppins.className}`}>
                    I’m a full stack web developer with 2 years of experience. I build websites, web apps, and digital solutions with stunning UI using React, Next.js, and Node.js. My focus is on creating solutions that are fast, user-friendly, and
                    tailored to client needs.
                </h2>
            </CardContent>
        </Card>
    );
};

export default About;
