import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { inter } from "@/app/layout";
import { poppins } from "@/app/layout";

const About = () => {
    return (
        <Card className={"col-span-6 lg:col-span-3"}>
            <CardHeader>
                <CardTitle className={"text-3xl font-medium text-red-300"}>👨‍💻 About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className={`flex flex-col gap-5 text-gray-200 text-xl leading-relaxed`}>
                    <li>👋 Hi, I’m Sumit — a full stack web developer with 2 years of experience.</li>
                    <li>💻 I build websites, web apps, and digital solutions with ✨ stunning UI using React, Next.js, and Node.js.</li>
                    <li>⚡ My focus is on creating solutions that are fast, 🎯 user-friendly, and tailored to client needs.</li>
                    <li>🤝 I enjoy collaborating with teams to deliver high-quality projects and 📚 always strive to learn and improve my skills.</li>
                    {/* <li></li> */}
                </ul>
                {/* <h2 className={`text-2xl font-medium leading-relaxed text-gray-300 ${poppins.className}`}> */}
                {/* 👋 Hi, I’m Sumit — a full stack web developer with 2 years of experience. 💻 I build websites, web apps, and digital solutions with ✨ stunning UI using React, Next.js, and Node.js. ⚡ My focus is on creating solutions that are fast,
                🎯 user-friendly, and tailored to client needs. 🤝 I enjoy collaborating with teams to deliver high-quality projects and 📚 always strive to learn and improve my skills. */}
                {/* </h2> */}
            </CardContent>
        </Card>
    );
};

export default About;
