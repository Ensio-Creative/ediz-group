import { ArrowRight, ArrowDown } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ediz Group" },
    {
      name: "description",
      content:
        "Ediz Group builds sustainable value across engineering, hospitality and entertainment.",
    },
  ];
}

const Section = ({ children, className = "" }: any) => (
  <section className={`mx-auto max-w-7xl lg:px-0 px-4 ${className}`}>{children}</section>
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <div className="relative bg-[#00000099] text-white">
        <div className="absolute inset-0 bg-[#00000099]" />
        <video
          className="h-[620px] lg:h-[680px] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/ediz-group-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0">
          <Section className="h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Building sustainable
              <br className="hidden sm:block" />
              {" "} value across diverse {" "}
              <br className="hidden sm:block" />
              industries
            </h1>
            <p className="mt-5 text-[11px] sm:text-xs tracking-[0.25em] text-white/80">
              ENGINEERING | HOSPITALITY | ENTERTAINMENT
            </p>
          </Section>
        </div>
      </div>

      {/* Intro */}
      <Section className=" lg:pt-[100px] lg:pb-14 pt-24 pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[31px] text-[#36454F] leading-relaxed sm:leading-8">
            Ediz Group is a diversified conglomerate with businesses across
            engineering, hospitality, and entertainment. Through precision
            infrastructure, exceptional experiences, and community-first values,
            we're building a future that transforms industries, improves lives,
            and drives economic growth.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 text-sm text-[#000080] uppercase tracking-wider px-4 py-3 rounded-full border border-[#000080] hover:bg-[#000080] hover:text-white transition-colors"
          >
            Learn about us
          </Link>
        </div>
      </Section>

      {/* Numbers */}
      <Section className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-[#F0F2F5] flex items-center justify-center p-4">
            <div className="text-[#36454F] flex flex-col sm:flex-row text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] gap-3 text-center md:text-left items-center">
              Our Numbers
              <ArrowRight size={32} className="text-blue-900 my-auto hidden sm:inline-block md:h-12 md:w-12" />
              <ArrowDown size={32} className="text-blue-900 sm:hidden md:h-12 md:w-12" />
            </div>
          </div>
          <div className="bg-[#000080] text-white px-6 py-10 sm:py-12 grid grid-cols-2 gap-6">
            <div>
              <div className="text-[42px] sm:text-[64px] md:text-[80px] lg:text-[90px] text-center font-bold leading-none">
                03
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">
                Industries
              </div>
            </div>
            <div>
              <div className="text-[42px] sm:text-[64px] md:text-[80px] lg:text-[90px] text-center font-bold leading-none">
                500+
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">
                Employees
              </div>
            </div>
            <div className="">
              <div className="text-[42px] sm:text-[64px] md:text-[80px] lg:text-[90px] text-center font-bold leading-none">
                06
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">
                Regions Served
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Businesses */}
      <Section className="pt-10 sm:pt-12 lg:pt-16">
        <p className="text-[15px] tracking-wider text-[#000080] font-medium">OUR BUSINESSES</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Engineering",
              to: "/our-business/engineering",
              img:
                "/images/our-business/ediz-group-home-engineering.png",
            },
            {
              title: "Hospitality",
              to: "/our-business/hospitality",
              img:
                "/images/our-business/ediz-group-home-hospitality.png",
            },
            {
              title: "Entertainment",
              to: "/our-business/entertainment",
              img:
                "/images/our-business/ediz-group-home-entertainment.png",
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group overflow-hidden block relative"
            >
              <div
                className="h-[460px] sm:h-[340px] md:h-[400px] lg:h-[450px] bg-cover bg-center group-hover:scale-[1.02] transition-transform"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="absolute inset-0 bg-[#00000099] group-hover:bg-black/40 transition-colors" />
              <div className="p-3 sm:p-4 absolute bottom-2 text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-medium">
                {card.title}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Impact banner */}
      <div className="mt-32 relative">
        <div className="relative">
          <img src="/images/ediz-group-our-impact.png" className="w-full lg:h-auto h-[260px] object-cover" alt="" />
          <div className="absolute inset-0 bg-[#00000099]" />
        </div>
        <div className="static md:absolute md:-bottom-30 md:right-20 flex justify-center md:justify-end items-end px-4 md:px-0 mt-6 md:mt-0">
          <div className="w-full md:w-[600px] bg-white p-6 sm:p-10 md:p-16 lg:p-20">
            <p className="text-[15px] tracking-wider text-[#000080] font-medium">OUR IMPACT</p>
            <p className="mt-6 text-[#36454F] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-relaxed">
              Education opens doors. Through strategic partnerships with
              schools, scholarship programs, and infrastructure development,
              we’re ensuring students have the resources, environment, and
              support they need to succeed and lead tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <Section className="mt-24 sm:mt-28 lg:mt-32 bg-[#F0F2F5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-10 sm:px-8 sm:py-12 lg:p-12">
          <div className="order-2 md:order-1">
            <p className="text-[15px] tracking-wider text-[#000080] font-medium">
              SUSTAINABILITY
            </p>
            <p className="my-6 lg:mr-10 text-[#36454F] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-relaxed">
              At Ediz Group, we build with future generations in mind. Our
              sustainability approach places environmental stewardship,
              community empowerment, and health & safety at the core of every
              decision. We protect the ecosystems we operate in, empower people
              to reach their full potential, and maintain the highest safety
              standards—ensuring our growth creates lasting value for both
              communities and the environment.
            </p>
            <Link
              to="/sustainability"
              className="inline-block uppercase mt-5 text-sm tracking-wider px-4 py-3 rounded-full border text-[#000080] border-[#000080] hover:bg-[#000080] hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>
          <div className="order-1 md:order-2 overflow-hidden border border-neutral-200">
            <img
              className="w-full h-full object-cover"
              alt="Sustainability"
              src="/images/ediz-group-sustainability-home.png"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
