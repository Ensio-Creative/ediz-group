import React from "react";
import type { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Entertainment • Ediz Group" },
        {
            name: "description",
            content:
                "Comprehensive entertainment solutions with a focus on exceptional service, quality, and sustainable impact.",
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

export default function Entertainment() {
    return (
        <main className="overflow-x-hidden bg-white text-[#36454F]">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000080]" />
                <div
                    className="h-[380px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/entertainment/ediz-group-entertainment-header.png')" }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Entertainment
                        </h1>
                    </Section>
                </div>
            </div>

            {/* Content */}
            <Section className="py-16 lg:flex justify-between lg:gap-16">
                {/* Left column: copy */}
                <div className="lg:w-1/2 lg:text-[16px] leading-[1.6] tracking-[0.04em] text-[#36454F]">
                    <p className="uppercase text-[15px] font-semibold tracking-[0.2em] text-[#000080] mb-4">
                        ENTERTAINMENT
                    </p>
                    <p className="mb-4">
                        We create entertainment that moves people. From film and television production to live events and digital content, Ediz Entertainment brings compelling stories to audiences everywhere. Our productions celebrate diverse voices, showcase authentic narratives, and deliver experiences that resonate long after the credits roll. We believe in the transformative power of storytelling, the kind that sparks conversation, challenges perspectives, and creates genuine emotional connections. We're building a comprehensive creative ecosystem where talent thrives, collaboration flourishes, and imagination knows no boundaries. Every project we undertake is crafted with meticulous attention to detail, innovative vision, and an unwavering commitment to excellence that elevates the entire entertainment landscape.
                    </p>
                    <p className="mb-4">
                        Entertainment has the power to inspire, unite, and transform communities across the globe. That's why we're deeply committed to nurturing local talent and creating meaningful opportunities for the next generation of storytellers, creators, and visionaries. Whether we're producing blockbuster films that captivate millions, hosting world-class events that bring people together, or developing original content for global streaming platforms, we blend creativity with purpose delivering entertainment that not only entertains but also empowers voices and elevates culture on the world stage. Through strategic partnerships, cutting-edge technology, and a passion for authentic storytelling, we're shaping the future of entertainment while honoring the rich cultural traditions that make every story worth telling.
                    </p>
                </div>

                {/* Right column: portfolio list */}
                <aside className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                    <h2 className="lg:text-[50px] text-3xl tracking-wide text-[#000080] mb-6">Our Portfolio</h2>
                    <div className="space-y-4 lg:text-[21px] text-xl tracking-[0.12em] uppercase text-[#36454F]">
                        <div className="border-y border-[#D4D4D4] py-6">
                            <p>BIG EDIZ ENTERTAINMENT NIGERIA LIMITED</p>
                        </div>
                        {/* <div className="border-t border-[#D4D4D4] pt-4">
                            <p>11:59 NIGHT LIFE</p>
                        </div> */}
                    </div>
                </aside>
            </Section>

            {/* Image row */}
            <Section className="">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/entertainment/ediz-group-entertainment-1.png')",
                    }} />
                    <div className="bg-neutral-200 h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center" style={{
                        backgroundImage: "url('/images/entertainment/ediz-group-entertainment-2.png')",
                    }} />
                </div>
            </Section>
        </main>
    );
}