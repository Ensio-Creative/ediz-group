import type { Route } from "../+types/root";
import React from "react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Sustainability • Ediz Group" },
        {
            name: "description",
            content:
                "Environmental stewardship, community empowerment, and safety across our operations.",
        },
    ];
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

export default function Sustainability() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000099]" />
                <div
                    className="h-[420px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/ediz-group-sustainability-home.png)" }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Sustainability</h1>
                    </Section>
                </div>
            </div>

            {/* Intro */}
            <Section className="py-16">
                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">SUSTAINABILITY</p>
                
            </Section>

            {/* Focus areas */}
            <Section>
                <div className="divide-y-1 divide-[#D4D4D4]">
                    {[
                        {
                            title: "Environment",
                            image: "/images/sustainability/ediz-group-environment.png",
                            desc:
                                "We’re dedicated to operating in a responsible and accountable manner to ensure that we protect our planet for the today and tomorrow generations through minimizing our environmental impact. We adopt a responsible approach to the use of natural resources, minimizing the impact of our operations and providing assurance of the quality of wastes that are discharged to the environment.",
                        },
                        {
                            title: "Empowerment",
                            image: "/images/sustainability/ediz-group-empowerment.png",
                            desc:
                                "We believe our success is inseparable from the prosperity of the communities where we operate. At Ediz Group, we invest in sustainable social programs that empower local entrepreneurs, develop youth potential, and strengthen community infrastructure—because when our communities thrive, we all benefit.",
                        },
                        {
                            title: "Health & Safety",
                            image: "/images/sustainability/ediz-group-health-&-safety.png",
                            desc:
                                "We conduct our operations with responsibility and strive to create positive outcomes for everyone we work with. The health and safety of our employees, contractors, and host communities are fundamental to our business. We're dedicated to continuously strengthening our safety performance and embedding these protections throughout our operations, ensuring we minimize workplace risks at every level.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="grid grid-cols-3 gap-6 p-6">
                            <h3 className="text-[#36454F] text-[50px] font-medium">{item.title}</h3>
                            <p className="mt-3 text-[#59666F] text-[16px] text-[#36454F] leading-6">{item.desc}</p>
                            <img className="w-full" src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}