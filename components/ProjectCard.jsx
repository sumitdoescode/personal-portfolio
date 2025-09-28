import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ id, name, description, github, url, image, tags, color }) => {
    return (
        <div key={id} className={`flex flex-col lg:flex-row rounded-2xl border shadow-2xl`} style={{ backgroundColor: color }}>
            <div className="flex-1">
                <Image src={image} alt={name} width="800" height="400" className="rounded-2xl w-full" />
            </div>
            <div className="p-4 flex-1">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p className="text-gray-300">{description}</p>
                <div className="flex gap-2 mt-5 flex-wrap">
                    {tags?.length > 0 &&
                        tags.map((tag, index) => {
                            return (
                                <Badge key={index} className="">
                                    {tag}
                                </Badge>
                            );
                        })}
                </div>
                <div className="flex gap-2 mt-8">
                    {github && (
                        <Button className={"bg-red-500"} variant={"outline"}>
                            <Link href={github} className="flex items-center gap-2" target="_blank">
                                <FaGithub />
                                Github
                            </Link>
                        </Button>
                    )}

                    {url && (
                        <Button>
                            <Link href={url} target="_blank" className="flex items-center gap-2">
                                Live Demo
                                <FaArrowRightLong />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
