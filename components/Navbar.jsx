"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { IoCodeSlashSharp } from "react-icons/io5";

const Navbar = () => {
    const colors = ["red-500", "blue-500", "green-500", "orange-500", "purple-500"];
    const [color, setColor] = useState(colors[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(colors[Math.floor(Math.random() * colors.length)]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <nav className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <IoCodeSlashSharp className={`text-red-300 text-3xl`} />
                            <div className="flex flex-col">
                                <h3 className="text-xl font-medium">sumitdoescode</h3>
                                {/* <p className="text-xs text-gray-300 -mt-1">fullStack web developer</p> */}
                            </div>
                        </div>
                    </div>
                    <Button className={"rounded-full"} variant={"outline"}>
                        Connect
                    </Button>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
