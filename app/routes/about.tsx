import type { Route } from "../+types/root";
import React from "react";
import Marquee from "react-fast-marquee";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About us • Ediz Group" },
        { name: "description", content: "Building the future across multiple industries." },
    ];
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

export default function About() {
    return (
        <main className="overflow-x-hidden">
            {/* Header / Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000099]" />
                <div
                    className="h-[420px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/ediz-group-about-us-header.png)" }}
                />
                <div className="absolute inset-0 ">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold tracking-tight">About us</h1>
                    </Section>
                </div>
            </div>

            {/* Intro */}
            <Section className="pt-[100px] pb-16">
                <div className="lg:grid grid-cols-3">
                    <div>
                        <p className="text-[15px] tracking-wider text-[#000080] font-medium">ABOUT EDIZ GROUP</p>
                    </div>
                    <div className="col-span-2">
                        <h2 className="lg:text-[60px] text-3xl leading-tight text-[#36454F] lg:max-w-3xl">
                            Building the future across multiple industries
                        </h2>
                    </div>
                </div>

            </Section>

            <section className="lg:ml-20">
                <Marquee autoFill>
                    <img src="/images/about-slide/ediz-group-engineering-moving-1.png" alt="Pipes" className="w-full lg:h-[320px] pr-4 object-cover" />
                    <img src="/images/about-slide/ediz-group-engineering-moving-1-1.png" alt="Engineering" className="w-full lg:h-[320px] pr-4 object-cover" />
                    <img src="/images/about-slide/ediz-group-hospitality-moving-1.png" alt="Hospitality" className="w-full lg:h-[320px] pr-4 object-cover" />
                    <img src="/images/about-slide/ediz-group-hospitality-moving-2.png" alt="Hospitality" className="w-full lg:h-[320px] pr-4 object-cover" />
                    <img src="/images/about-slide/ediz-group-entertainment-moving-1.png" alt="Pipes" className="w-full lg:h-[320px] pr-4 object-cover" />
                    <img src="/images/about-slide/ediz-group-entertainment-moving-2.png" alt="Pipes" className="w-full lg:h-[320px] pr-4 object-cover" />
                </Marquee>
            </section>

            <Section className="">
                <div className="mt-20 lg:grid grid-cols-3 text-[#36454F]">
                    <div></div>
                    <div className="space-y-6 col-span-2 leading-7 lg:text-[16px]">
                        <p>
                            Ediz Group is a premier, fully integrated conglomerate driving progress across Nigeria’s
                            most vital sectors. With a strong foundation and strategic vision, we’ve built a diverse
                            portfolio that balances industrial strength with innovative growth—delivering value to our
                            partners, communities, and stakeholders.
                        </p>
                        <p>
                            Our engineering division delivers large-scale infrastructure solutions and specialized
                            technical services that power Nigeria’s development. From transportation networks to
                            industrial facilities, we partner with public and private sectors to build the foundations of a
                            modern economy. Every project reflects our commitment to quality, safety, and sustainable
                            progress.
                        </p>
                        <p>
                            Beyond infrastructure, we’ve invested significantly in hospitality and entertainment sectors
                            where we can directly enhance people’s lives and experiences. This diversified portfolio
                            reflects our belief in Nigeria’s rising middle class and our commitment to contributing to the
                            social fabric of the communities we serve.
                        </p>
                        <p>
                            At Ediz Group, we don’t just respond to opportunities; we create them. Through strategic
                            investments, operational excellence, and unwavering integrity, we’re building a conglomerate
                            that stands the test of time while adapting to tomorrow’s challenges.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Vision */}
            <div className="mt-20">
                {/* <Section> */}
                <div className="relative overflow-hidden rounded-none">
                    <img
                        src="/images/ediz-group-vision.png"
                        alt="Vision"
                        className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00000099]" />
                    <div className="absolute max-w-7xl mx-auto inset-0 px-4 lg:px-0">
                        <div className="absolute lg:block hidden left-4 sm:left-6 lg:left-0 bottom-6 sm:bottom-8 lg:bottom-10 text-white text-2xl sm:text-3xl lg:text-[60px] z-20">
                            Our Vision
                        </div>
                        <div className="absolute right-4 sm:right-6 lg:right-0 bottom-4 sm:bottom-8 lg:bottom-10 bg-white backdrop-blur p-4 sm:p-5 lg:p-8 w-full max-w-xs sm:max-w-sm lg:w-[540px] z-10">
                            <p className="lg:hidden text-3xl text-[#000080]"> Our Vision</p>

                            <p className="text-[#36454F] text-[14px] sm:text-[16px] lg:text-[20px] leading-relaxed">
                                To shape Nigeria’s future as the conglomerate that bridges industrial progress with
                                enhanced human prosperity, setting the standard for integrated excellence across every
                                sector we serve.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </Section> */}
            </div>

            {/* Mission */}
            <div className="">
                {/* <Section> */}
                <div className="relative overflow-hidden rounded-none">
                    <img
                        src="/images/ediz-group-mission.png"
                        alt="Mission"
                        className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00000099]" />
                    <div className="absolute max-w-7xl mx-auto inset-0 px-4 lg:px-0">
                        <div className="absolute lg:block hidden left-4 sm:left-6 lg:left-0 bottom-6 sm:bottom-8 lg:bottom-10 text-white text-2xl sm:text-3xl lg:text-[60px] z-20">
                            Our Mission
                        </div>
                        <div className="absolute right-4 sm:right-6 lg:right-0 bottom-4 sm:bottom-8 lg:bottom-10 bg-white backdrop-blur p-4 sm:p-5 lg:p-8 w-full max-w-xs sm:max-w-sm lg:w-[540px] z-10">
                            <p className="lg:hidden text-3xl text-[#000080]"> Our Mission</p>
                            <p className="text-[#36454F] text-[14px] sm:text-[16px] lg:text-[20px] leading-relaxed">
                                To consistently deliver integrated solutions across engineering, hospitality, and
                                entertainment — driving progress through excellence, innovation, and strategic partnerships.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </Section> */}
            </div>

            {/* Values */}
            <div className="bg-[#000080] text-white">
                <Section className="py-32">
                    <div className="lg:grid grid-cols-3">
                        <div>
                            <p className="text-[15px] tracking-wider font-medium">OUR VALUES</p>
                        </div>
                        <div className="col-span-2">
                            <div className="text-2xl sm:text-3xl lg:text-[60px] space-y-1">
                                <p>People & Safety</p>
                                <p>Excellence in Execution</p>
                                <p>Innovation & Agility</p>
                                <p>Responsible Stewardship</p>
                                <p>Partnership & Trust</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Management Team */}
            <Section className="mt-20">
                <p className="text-[15px] tracking-wider text-[#000080] font-medium">MANAGEMENT TEAM</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            name: "Okolie Chibuzor Edwin",
                            title: "Managing Director",
                            img: "/images/team/okolie-chibuzor-edwin.png",
                        },
                        {
                            name: "Okolie Elochukwu Wisdom",
                            title: "Secretary",
                            img: "/images/team/okolie-elochukwu-wisdom.png",
                        },
                        {
                            name: "Okolie Chibuike Godspower",
                            title: "Project Manager",
                            img: "/images/team/okolie-chibuike-godspower.png",
                        },
                        { name: "Uche Queen", title: "Admin", img: "/images/team/uche-queen.png" },
                    ].map((m) => (
                        <div key={m.name} className="">
                            <div className="bg-[#F0F2F5]">
                                <img src={m.img} alt={m.name} className="w-full h-[331px] object-cover" />
                            </div>
                            <div className="mt-3">
                                <p className="text-[#36454F] text-[20px]">{m.name}</p>
                                <p className="text-[#8b98a0] text-[16px]">{m.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}