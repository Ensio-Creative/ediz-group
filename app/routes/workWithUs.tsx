import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Careers • Ediz Group" },
        {
            name: "description",
            content:
                "Join our team and be a part of our commitment to sustainability, community empowerment, and safety.",
        },
    ];
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

const workWithUs = () => {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[#00000099]" />
                <div
                    className="h-[420px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/ediz-group-careers-header.png)" }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Work with us</h1>
                    </Section>
                </div>
            </div>

            {/* Intro */}
            <Section className="py-16 mb-20">
                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">CAREERS</p>
                <div className='grid grid-cols-2 mt-4'>
                    <div>
                        <h2 className='text-[#36454F] text-[60px]'>Open Roles</h2>
                    </div>
                    <div>
                        <p className='text-[#36454F] text-[25px]'>Unfortunately, there are no openings at the moment. Check back soon for opportunities to join us and make a difference.</p>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default workWithUs;