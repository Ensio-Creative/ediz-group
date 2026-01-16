import { ArrowRight } from "lucide-react";
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
      <div className="relative bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.55),rgba(0,0,0,.55))]" />
        <div
          className="h-[420px] sm:h-[680px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34c?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0">
          <Section className="h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Building sustainable
              <br className="hidden sm:block" />
              value across diverse
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
      <Section className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[31px] text-[#36454F] leading-7">
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
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F0F2F5] flex items-center justify-center p-4 ">
            <div className="text-[#36454F] flex text-[60px] gap-3">
              Our Numbers
              <ArrowRight size={50} width={50} className="text-blue-900 my-auto" />
            </div>
          </div>
          <div className="bg-[#000080] text-white px-6 py-12 grid grid-cols-2 gap-6">
            <div>
              <div className="text-[90px] text-center font-bold leading-none">03</div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-center">
                Industries
              </div>
            </div>
            <div>
              <div className="text-[90px] text-center font-bold leading-none">500+</div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-center">
                Employees
              </div>
            </div>
            <div className="">
              <div className="text-[90px] text-center font-bold leading-none">06</div>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-center">
                Regions Served
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Businesses */}
      <Section>
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
                className="h-[450px] bg-cover bg-center group-hover:scale-[1.02] transition-transform"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="p-4 absolute bottom-2 text-white text-[35px] font-medium">{card.title}</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Impact banner */}
      <div className="mt-16 bg-neutral-100 relative">
        <img src="/images/ediz-group-our-impact.png" className="w-full" alt="" />
        <div className="absolute -bottom-30 right-20 flex items-end">
          <div className="w-[600px] bg-white p-20">
            <p className="text-[15px] tracking-wider text-[#000080] font-medium">OUR IMPACT</p>
            <p className="mt-3 text-[#36454F] text-[23px] leading-6">
              Education opens doors. Through strategic partnerships with
              schools, scholarship programs, and infrastructure development,
              we’re ensuring students have the resources, environment, and
              support they need to succeed and lead tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <Section className="mt-32 bg-[#F0F2F5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-12">
          <div className="order-2 md:order-1">
            <p className="text-[15px] tracking-wider text-[#000080] font-medium">
              SUSTAINABILITY
            </p>
            <p className="my-3 lg:mr-10 text-[#36454F] text-[21px] leading-6">
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
