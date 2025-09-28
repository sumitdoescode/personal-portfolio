import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Connect = () => {
    return (
        <Card className={"col-span-6 md:col-span-2"}>
            <CardHeader>
                <CardTitle className={"text-3xl font-medium text-red-300"}>🤝 Let’s Connect</CardTitle>
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
                    <div className="p-2 bg-white/10 rounded-full flex items-center justify-center">
                        <Link href="mailto:sumit.does.code@gmail.com?subject=Project%20Inquiry&body=Hi%20Sumit,%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" className="flex items-center justify-center">
                            <Image src="/icons/gmail-icon.png" alt="gmail-icon" width="27" height="27" className="inline-block" />
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Connect;
