import type { Route } from "../+types/root";
import React from "react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact us • Ediz Group" },
        { name: "description", content: "Get in touch with Ediz Group." },
    ];
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

export default function Contact() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <div className="relative text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.45),rgba(0,0,0,.35))]" />
                <div
                    className="h-[360px] sm:h-[650px] w-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(/images/ediz-group-contact-header.png)",
                    }}
                />
                <div className="absolute inset-0">
                    <Section className="h-full flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Contact us</h1>
                    </Section>
                </div>
            </div>

            {/* Intro */}
            <Section className="py-16">
                <p className="text-[15px] tracking-wider text-[#000080] text-center font-semibold">CONTACT US</p>
                <h2 className="mt-4 text-[#36454F] text-2xl sm:text-[60px] leading-tight max-w-4xl text-center mx-auto">
                    Get in touch with us for any enquiries or questions because we can’t wait to hear from you.
                </h2>
            </Section>

            {/* Office + Map */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-md overflow-hidden shadow-sm">
                    <div className="bg-[#F7F8FA] p-8">
                        <div className="space-y-6 text-[#36454F] text-sm">
                            <div>
                                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">MAIN OFFICE</p>
                                <p className="mt-2 text-[26px]">
                                    11 Emeyal Street, G.R.A. Phase 3,<br /> Port Harcourt, Rivers State – Nigeria.
                                </p>
                            </div>
                            <div>
                                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">CALL US</p>
                                <p className="mt-2 text-[26px]">+234 806 730 0000<br />+234 703 157 8053</p>
                            </div>
                            <div>
                                <p className="text-[15px] tracking-wider text-[#000080] font-semibold">EMAIL US</p>
                                <p className="mt-2 text-[26px]">info@edizgroup.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <iframe
                            title="Map to Ediz Group"
                            className="w-full h-[360px] md:h-[380px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.399782949126!2d6.998!3d4.842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGRA%20Phase%203%20Port%20Harcourt!5e0!3m2!1sen!2sNG!4v1700000000000"
                        />
                    </div>
                </div>
            </Section>

            {/* Contact form */}
            <Section className="py-16">
                <h3 className="text-[#36454F] text-2xl sm:text-[60px] text-center">Send a Message</h3>
                <p className="text-center text-[#8b98a0] text-[16px] mt-2">Fields marked with an * are required</p>
                <form className="mt-8 max-w-3xl mx-auto space-y-4">
                    <div>
                        <label className="sr-only" htmlFor="name">Name*</label>
                        <input id="name" required className="w-full border border-[#D4D4D4] p-3 text-sm" placeholder="Name*" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="phone">Phone Number*</label>
                        <input id="phone" required className="w-full border border-[#D4D4D4] p-3 text-sm" placeholder="Phone Number*" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="email">Email Address*</label>
                        <input id="email" type="email" required className="w-full border border-[#D4D4D4] p-3 text-sm" placeholder="Email Address*" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="subject">Subject*</label>
                        <input id="subject" required className="w-full border border-[#D4D4D4] p-3 text-sm" placeholder="Subject*" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message">Your Message*</label>
                        <textarea id="message" required rows={6} className="w-full border border-[#D4D4D4] p-3 text-sm" placeholder="Your Message*" />
                    </div>
                    <button type="submit" className="w-full bg-[#000080] text-white py-3 text-sm">Send Message</button>
                </form>
            </Section>
        </main>
    );
}