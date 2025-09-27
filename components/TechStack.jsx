import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Html from "./icons/Html";
import Css from "./icons/Css";
import Tailwind from "./icons/Tailwind";
import Javascript from "./icons/Javascript";
import Node from "./icons/Node";
import Express from "./icons/Express";
import MongoDB from "./icons/MongoDB";
import Mongoose from "./icons/Mongoose";
import ReactJs from "./icons/ReactJs";
import NextJs from "./icons/NextJs";
import Figma from "./icons/Figma";
import AuthJs from "./icons/AuthJs";
import Clerk from "./icons/Clerk";

const TechStack = () => {
    return (
        <Card className={"col-span-6 lg:col-span-3"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium text-red-300"}>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-0 gap-y-8">
                    <Html />
                    <Css />
                    <Tailwind />
                    <Javascript />
                    <Node />
                    <Express />
                    <MongoDB />
                    <Mongoose />
                    <ReactJs />
                    <NextJs />
                    <Figma />
                    <AuthJs />
                    <Clerk />
                </div>
            </CardContent>
        </Card>
    );
};

export default TechStack;
