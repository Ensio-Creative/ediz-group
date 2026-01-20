import React from "react";
import type { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Hospitality • Ediz Group" },
        {
            name: "description",
            content:
                "Comprehensive hospitality solutions with a focus on exceptional service, quality, and sustainable impact.",
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

export default function Hospitality() {
    return (
        <main className="overflow-x-hidden bg-white text-[#36454F]">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000080]" />
                <div
                    className="h-[380px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hospitality/ediz-group-hospitality-header.png')" }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Hospitality
                        </h1>
                    </Section>
                </div>
            </div>

            {/* Content */}
            <Section className="lg:py-32 py-20 lg:flex justify-between lg:gap-16">
                {/* Left column: copy */}
                <div className="lg:w-1/2 lg:text-[16px] leading-[1.6] tracking-[0.04em] text-[#36454F]">
                    <p className="uppercase text-[15px] font-semibold tracking-[0.2em] text-[#000080] mb-6">
                        HOSPITALITY
                    </p>
                    <p className="mb-4">
                        Our hospitality division is Port Harcourt's premier social hospitality operation, serving over 20,000 guests annually within Port Harcourt metropolitan and driven by a commitment to delivering guest experiences that stand out. Inspired by a vision of excellence, we operate where cultural authenticity meets global sophistication, focusing entirely on crafting immersive dining destinations. Our extensive portfolio encompasses a full spectrum of hospitality assets, specializing in celebrated restaurants, sophisticated bars, exclusive lounges, and dynamic night clubs. We don't just offer venues; we craft tailored experiences, ensuring every guest, whether seeking an exquisite urban meal or a premium evening experience, finds a moment suited to their desires.

                    </p>
                    <p className="mb-4">
                        Our market leadership is built upon operational excellence, innovation, and sustainability. We continually pushes the boundaries of gastronomy and social nightlife, managing acclaimed concepts that define modern luxury and setting new benchmarks for service in every market we enter. We are dedicated to developing sustainable practices across our value chain, from partnering with both local and international brands to designing eco-conscious operational models. By strategically investing in the future of the hospitality sector, Ediz Group drives economic growth and consistently raises the bar for service worldwide, solidifying our reputation as a provider of unforgettable memories.

                    </p>
                </div>

                {/* Right column: portfolio list */}
                <aside className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                    <h2 className="lg:text-[50px] text-3xl tracking-wide text-[#000080] mb-6">Our Portfolio</h2>
                    <div className="space-y-4 lg:text-[21px] text-xl tracking-[0.12em] uppercase text-[#36454F]">
                        <div className="border-t border-[#D4D4D4] py-6">
                            <p>EDIZ WINEBAR</p>
                        </div>
                        <div className="border-y border-[#D4D4D4] py-6">
                            <p>11:59 NIGHT LIFE</p>
                        </div>
                    </div>
                </aside>
            </Section>

            {/* Image row */}
            <Section className="">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/hospitality/ediz-group-hospitality-1.png')",
                    }} />
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/hospitality/ediz-group-hospitality-2.png')",
                    }} />
                </div>
            </Section>
        </main>
    );
}