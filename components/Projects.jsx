import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        name: "Instagram Clone",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        image: "/images/instagram-clone.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express", "Clerk"],
        github: "https://github.com/sumitdoescode/Instagram-Clone",
        url: "https://instagram-clone-sumitdoescode.vercel.app/",
        color: "rgba(255, 179, 71, 0.1)",
    },
    {
        id: 2,
        name: "True Feedback",
        description: "A Next.js app for sending and receiving anonymous feedback, built to promote honesty and personal growth.",
        image: "/images/true-feedback.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel"],
        github: "https://github.com/sumitdoescode/true-feedback",
        url: "https://true-feedback-eight-rho.vercel.app/",
        color: "rgba(144, 238, 144, 0.1)",
    },
    {
        id: 3,
        name: "Strongly",
        description: "A full-stack Next.js app to log workouts, track attendance consistency, and maintain streaks for building discipline and progress.",
        image: "/images/strongly.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/sumitdoescode/gym-attendance",
        url: "https://strongly-gym.vercel.app/",
        color: "rgba(255, 99, 132, 0.1)",
    },
    {
        id: 4,
        name: "Youtube Backend",
        description: "YouTube Backend Clone – A full-featured backend with auth, video uploads, likes, comments, playlists, subscriptions, search, and history built using Node.js, Express, MongoDB, and Clerk.",
        image: "/images/youtube-backend-3.jpg",
        tags: ["Node.js", "MongoDB", "Express", "Clerk", "Render"],
        github: "https://github.com/sumitdoescode/youtube-backend",
        url: null,
        color: "rgba(135, 206, 250, 0.1)",
    },
];

const Projects = () => {
    return (
        <Card className={"col-span-6 pb-18 max-w-5xl mx-auto order-5 md:order-none"}>
            <CardHeader>
                <CardTitle className={"text-3xl font-medium text-red-300"}>💻 Projects</CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-12"}>
                <div className="flex flex-col gap-10 mx-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <Link className="text-center" href="/projects">
                    <Button>View All Projects</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default Projects;
