import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { IoCodeSlashSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <IoCodeSlashSharp className="text-red-300 text-3xl" />
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
