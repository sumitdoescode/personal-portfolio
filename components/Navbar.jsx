"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { IoCodeSlashSharp } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-4 backdrop-blur-md z-50">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link className="flex items-center gap-2" href="/">
                            <IoCodeSlashSharp className={`text-red-300 text-3xl`} />
                            <div className="flex flex-col">
                                <h3 className="text-xl font-medium">sumitdoescode</h3>
                                {/* linking thing */}
                                <div className="flex items-center gap-1 -mt-1">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm text-gray-400">Available</span>
                                </div>
                            </div>
                        </Link>
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
