import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        id: 1,
        name: "Instagram Clone",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        url: "https://github.com/sumitdoescode/instagram-clone",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind"],
    },
    {
        id: 2,
        name: "True Feedback",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        url: "https://github.com/sumitdoescode/instagram-clone",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel"],
    },
    {
        id: 3,
        name: "Youtube Backend",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        url: "https://github.com/sumitdoescode/instagram-clone",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ["Node.js", "MongoDB", "Express", "Clerk", "Render"],
    },
    {
        id: 4,
        name: "Strongly",
        description: "A full stack web application that allows users to create and share posts, stories, and videos on Instagram.",
        url: "https://github.com/sumitdoescode/instagram-clone",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ["React", "Next.js", "Node.js", "MongoDB", "Express"],
    },
];

const Projects = () => {
    return (
        <Card className={"col-span-6 pb-18"}>
            <CardHeader>
                <CardTitle className={"text-2xl font-medium text-red-300"}>Projects</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div key={project.id} className="flex gap-2 border rounded-md bg-stone-950">
                            <div className="p-8">
                                <h2 className="text-2xl font-medium">{project.name}</h2>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="flex gap-2 mt-5">
                                    {project.tags.map((tag, index) => {
                                        return (
                                            <Badge key={index} className="">
                                                {tag}
                                            </Badge>
                                        );
                                    })}
                                </div>
                                <div className="flex gap-2 mt-8">
                                    <Button>
                                        <Link href={project.url} target="_blank">
                                            Github
                                        </Link>
                                    </Button>
                                    <Button className={"bg-red-500"} variant={"outline"}>
                                        <Link href={project.url} target="_blank">
                                            Live Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img src={project.image} alt={project.name} width="400" height="200" />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Projects;
