import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Intro = () => {
    return (
        <Card className={"col-span-6 md:col-span-4"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium"}>
                    Hello, I'm <span className="text-red-300">Sumit</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="text-4xl font-semibold">
                    creating <span>websites</span> and web solutions for <span className="text-red-300">business</span> and <span className="text-red-300">individuals.</span>
                </h2>
            </CardContent>
        </Card>
    );
};

export default Intro;
