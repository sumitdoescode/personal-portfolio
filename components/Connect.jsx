import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Connect = () => {
    return (
        <Card className={"col-span-6 md:col-span-2"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium text-red-300"}>Let's connect</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <div className="p-2 bg-pink-500/20 rounded-full">
                        <Link href="https://www.instagram.com/sumitdoescode/" target="_blank">
                            <FaInstagram className="text-3xl text-pink-500" />
                        </Link>
                    </div>
                    <div className="p-2 bg-gray-800/100 rounded-full">
                        <Link href="https://github.com/sumitdoescode" target="_blank">
                            <FaGithub className="text-3xl text-gray-300" />
                        </Link>
                    </div>
                    <div className="p-2 bg-green-400/20 rounded-full">
                        <Link href="https://wa.me/919319560486" target="_blank">
                            <FaSquareWhatsapp className="text-3xl text-green-400" />
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Connect;
