import React from "react";
import type { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Engineering • Ediz Group" },
        {
            name: "description",
            content:
                "Comprehensive engineering solutions across oil & gas and construction with a focus on safety, quality, and sustainable impact.",
        },
    ];
}

const Section = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>
        {children}
    </section>
);

export default function Engineering() {
    return (
        <main className="overflow-x-hidden bg-white text-[#36454F]">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000080]" />
                <div
                    className="h-[380px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/engineering/ediz-group-engineering-header.png')" }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Engineering
                        </h1>
                    </Section>
                </div>
            </div>

            {/* Content */}
            <Section className="py-32 lg:flex justify-between lg:gap-16">
                {/* Left column: copy */}
                <div className="lg:w-1/2 lg:text-[16px] leading-[1.6] tracking-[0.04em] text-[#36454F]">
                    <p className="uppercase text-[15px] font-semibold tracking-[0.2em] text-[#000080] mb-6">
                        Oil and Gas
                    </p>
                    <p className="mb-4">
                        Our engineering division delivers comprehensive solutions across Nigeria&apos;s oil and gas
                        and construction sectors, combining technical expertise with operational excellence to
                        drive critical infrastructure development. With extensive experience, our engineering
                        companies provide integrated services from design and procurement to execution and
                        maintenance, serving major operators and contractors throughout the Niger Delta and
                        beyond.
                    </p>
                    <p className="mb-4">
                        We specialize in complex projects that demand precision engineering, rigorous safety
                        standards, and innovative problem-solving, whether developing upstream oil and gas
                        facilities, constructing commercial and industrial structures, or delivering integrated
                        engineering support services. Our teams work across onshore and offshore environments,
                        consistently meeting stringent industry specifications while maintaining our commitment
                        to timely delivery and cost efficiency.
                    </p>
                    <p className="mb-4">
                        At the core of our engineering operations is a dedication to sustainable development and
                        local capacity building. We invest in cutting-edge technology and continuous workforce
                        training to ensure our projects meet international standards while creating lasting value
                        for Nigerian communities.
                    </p>
                    <p className="mb-4">
                        From fabrication and installation to mechanical and electrical engineering, our
                        companies leverage strategic partnerships with local and international suppliers to
                        deliver world-class results. Our approach integrates environmental responsibility with
                        economic impact, ensuring every project contributes to Nigeria&apos;s energy security and
                        infrastructure growth while adhering to the highest health, safety, and environmental
                        protocols.
                    </p>
                </div>

                {/* Right column: portfolio list */}
                <aside className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                    <h2 className="lg:text-[50px] text-3xl tracking-wide text-[#000080] mb-6">Our Portfolio</h2>
                    <div className="space-y-4 lg:text-[21px] text-xl tracking-[0.12em] uppercase text-[#36454F]">
                        <div className="border-t border-[#D4D4D4] py-6">
                            <p>EDDYGBO INTEGRATED RESOURCES LIMITED</p>
                        </div>
                        <div className="border-t border-[#D4D4D4] py-6">
                            <p>SCOPE OIL AND GAS NIGERIA LIMITED</p>
                        </div>
                        <div className="border-t border-[#D4D4D4] py-6 border-b">
                            <p>CEO GLOBAL ENGINEERING NETWORK LIMITED</p>
                        </div>
                    </div>
                </aside>
            </Section>

            {/* Image row */}
            <Section className="">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/engineering/ediz-group-engineering-1.png')",
                    }} />
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/engineering/ediz-group-engineering-2.png')",
                    }} />
                </div>
            </Section>
        </main>
    );
}