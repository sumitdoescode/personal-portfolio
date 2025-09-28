import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        id: 1,
        name: "Instagram Clone",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        github: "https://github.com/sumitdoescode/Instagram-Clone",
        url: "https://instagram-clone-sumitdoescode.vercel.app/",
        image: "/instagram-clone.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express", "Clerk"],
    },
    {
        id: 2,
        name: "True Feedback",
        description: "A Next.js app for sending and receiving anonymous feedback, built to promote honesty and personal growth.",
        github: "https://github.com/sumitdoescode/true-feedback",
        url: "https://true-feedback-eight-rho.vercel.app/",
        image: "/true-feedback.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel"],
    },
    {
        id: 3,
        name: "Strongly",
        description: "A full-stack Next.js app to log workouts, track attendance consistency, and maintain streaks for building discipline and progress.",
        github: "https://github.com/sumitdoescode/gym-attendance",
        url: "https://gym-attendance-five.vercel.app/",
        image: "/strongly.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Express"],
    },
    {
        id: 4,
        name: "Youtube Backend",
        description: "YouTube Backend Clone – A full-featured backend with auth, video uploads, likes, comments, playlists, subscriptions, search, and history built using Node.js, Express, MongoDB, and Clerk.",
        github: "https://github.com/sumitdoescode/youtube-backend",
        url: null,
        image: "/youtube-backend-3.jpg",
        tags: ["Node.js", "MongoDB", "Express", "Clerk", "Render"],
    },
];

const Projects = () => {
    return (
        <Card className={"col-span-6 pb-18"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium text-red-300"}>Projects</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-10 max-w-4xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`flex flex-col md:flex-row rounded-2xl border shadow-2xl  ${project.id === 1 ? "bg-orange-400/6" : project.id === 2 ? "bg-rose-700/10" : project.id === 3 ? "bg-green-700/10" : "bg-red-400/10"}`}
                        >
                            <div className="md:flex-4 lg:flex-3">
                                <Image src={project.image} alt={project.name} width="800" height="400" className="rounded-2xl w-full" />
                            </div>
                            <div className="p-4 sm:p-8 md:flex-2">
                                <h2 className="text-2xl font-medium">{project.name}</h2>
                                {/* <p className="text-gray-300">{project.description}</p> */}
                                <div className="flex gap-2 mt-5 flex-wrap">
                                    {project.tags.map((tag, index) => {
                                        return (
                                            <Badge key={index} className="">
                                                {tag}
                                            </Badge>
                                        );
                                    })}
                                </div>
                                <div className="flex gap-2 mt-8">
                                    <Button className={"bg-red-500"} variant={"outline"}>
                                        <Link href={project.github ? project.github : "#"} target="_blank">
                                            Github
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link href={project.url ? project.url : "#"} target="_blank">
                                            Live Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Projects;
