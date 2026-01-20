import { ArrowDownRight } from "lucide-react";
import type { Route } from "../../+types/root";
import React from "react";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Our Businesses • Ediz Group" },
        { name: "description", content: "Engineering, Hospitality, Entertainment." },
    ];
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

export default function OurBusiness() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000099]" />
                <video
                    className="h-[380px] sm:h-[650px] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/images/ediz-group-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Our Businesses</h1>
                    </Section>
                </div>
            </div>

            {/* Intro */}
            <Section className="mt-16">
                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">OUR BUSINESSES</p>
                <div className="mt-6 max-w-2xl text-[#36454F] lg:text-[16px] leading-6">
                    From pioneering engineering solutions to creating memorable hospitality experiences and
                    groundbreaking entertainment, we build businesses that shape industries and enrich lives.
                    Our diverse portfolio shares a common foundation: uncompromising quality, forward-thinking
                    innovation, and a commitment to sustainable growth that benefits our partners, communities,
                    and the market we serve.
                </div>

                {/* List */}
                <div className="mt-10 divide-y divide-[#D4D4D4] border-t border-[#D4D4D4]">
                    {[
                        { label: "Engineering", to: "/our-business/engineering" },
                        { label: "Hospitality", to: "/our-business/hospitality" },
                        { label: "Entertainment", to: "/our-business/entertainment" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.to}
                            className="group flex items-center justify-between py-8"
                        >
                            <span className="text-3xl sm:text-[60px] text-[#36454F]">{item.label}</span>
                            <ArrowDownRight size={50} className="text-[#000080] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}