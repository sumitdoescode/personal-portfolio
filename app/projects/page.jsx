import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const projects = [
    {
        id: 1,
        name: "Instagram Clone",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        github: "https://github.com/sumitdoescode/Instagram-Clone",
        url: "https://instagram-clone-sumitdoescode.vercel.app/",
        image: "/images/instagram-clone.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express", "Clerk"],
        color: "rgba(255, 179, 71, 0.1)",
    },
    {
        id: 2,
        name: "True Feedback",
        description: "A Next.js app for sending and receiving anonymous feedback, built to promote honesty and personal growth.",
        github: "https://github.com/sumitdoescode/true-feedback",
        url: "https://true-feedback-eight-rho.vercel.app/",
        image: "/images/true-feedback.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel"],
        color: "rgba(144, 238, 144, 0.1)",
    },
    {
        id: 3,
        name: "Strongly",
        description: "A full-stack Next.js app to log workouts, track attendance consistency, and maintain streaks for building discipline and progress.",
        github: "https://github.com/sumitdoescode/gym-attendance",
        url: "https://gym-attendance-five.vercel.app/",
        image: "/images/strongly.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express"],
        color: "rgba(255, 99, 132, 0.1)",
    },
    {
        id: 4,
        name: "Youtube Backend",
        description: "YouTube Backend Clone – A full-featured backend with auth, video uploads, likes, comments, playlists, subscriptions, search, and history.",
        github: "https://github.com/sumitdoescode/youtube-backend",
        url: "https://youtube-backend-eight-rho.vercel.app/",
        image: "/images/youtube-backend-3.jpg",
        tags: ["Node.js", "MongoDB", "Express", "Clerk", "Render"],
        color: "rgba(135, 206, 250, 0.1)",
    },
    {
        id: 5,
        name: "Omnifood",
        description: "A clean and modern landing page design for a conceptual food subscription service that helps users eat healthy all year.",
        github: "https://github.com/sumitdoescode/omnifood",
        url: "https://sumitdoescode-omnifood.vercel.app/",
        image: "/images/omnifood.png",
        tags: ["Html", "Css", "JS"],
        color: "rgba(221, 160, 221, 0.1)",
    },
    {
        id: 6,
        name: "Google Clone",
        description: "A functional web app that replicates Google’s search experience using the Google Search API.",
        github: "https://github.com/sumitdoescode/google-clone",
        url: "https://google-clone-sumitwebdev.vercel.app/",
        image: "/images/google-clone.png",
        tags: ["Reactjs", "Tailwind", "Google Api"],
        color: "rgba(255, 255, 153, 0.1)",
    },
    {
        id: 7,
        name: "Music School",
        description: "A modern and responsive landing page for a conceptual music school, designed to showcase courses, instructors, and student programs.",
        github: "https://github.com/sumitdoescode/nextjs-music-school",
        url: "https://nextjs-music-school-rdlm.vercel.app/",
        image: "/images/music-school.png",
        tags: ["Next JS", "Typescript", "Tailwind"],
        color: "rgba(64, 224, 208, 0.1)",
    },
    {
        id: 8,
        name: "Beauty Store",
        description: "A clean and modern landing page design for a conceptual online beauty store.",
        github: "https://github.com/sumitdoescode/beautystore-ui",
        url: null,
        image: "/images/beauty-store.png",
        tags: ["Html", "Css"],
        color: "rgba(255, 182, 193, 0.2)",
    },
];

//  "rgba(176, 224, 230, 0.1)",
//   "rgba(245, 245, 220, 0.1)",

const page = () => {
    return (
        <section className="py-24">
            <Container>
                <Breadcrumb className="mb-4 max-w-5xl mx-auto">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Card className={"col-span-6 max-w-5xl mx-auto"}>
                    <CardHeader>
                        <CardTitle className={"text-3xl font-medium text-red-300"}>💻 Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-10 mx-auto">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
};

export default page;
