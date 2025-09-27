import Image from "next/image";
import Container from "@/components/Container";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Intro from "@/components/Intro";
import Connect from "@/components/Connect";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <section className="py-10">
            <Container>
                <div className="grid grid-cols-6 gap-8">
                    <Intro />
                    <Connect />
                    <About />
                    <TechStack />
                    <Projects />
                    <Contact />
                </div>
            </Container>
        </section>
    );
}
