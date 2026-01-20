import React from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";

const linkBase =
    "text-sm md:text-[16px] transition-colors px-3 py-2";

const mobileLinkBase =
    "block w-full text-left text-xl text-[#000080] py-6";

const HeaderNav = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mobileBusinessesOpen, setMobileBusinessesOpen] = React.useState(false);
    const [desktopBusinessesOpen, setDesktopBusinessesOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const headerBg = scrolled || mobileOpen ? "bg-white backdrop-blur" : "bg-transparent";
    const desktopLinkColor = scrolled || mobileOpen ? "text-[#000080]" : "text-white";

    const closeMobile = () => setMobileOpen(false);

    return (
        <header className={`absolute lg:fixed top-0 inset-x-0 z-40 ${headerBg}`}>
            <div className="px-4">
                <div className="py-2 rounded-md">
                    <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={scrolled || mobileOpen ? "/images/ediz-group-footer-logo.svg" : "/images/ediz-group-logo.svg"}
                                alt="Ediz Group"
                                className="h-6 w-auto"
                            />
                        </Link>

                        <nav className="hidden md:flex items-center">
                            <NavLink to="/" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                Home
                            </NavLink>
                            <NavLink to="/about" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                About us
                            </NavLink>
                            <div className="relative flex items-center">
                                <NavLink to="/our-business" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                    Our Businesses
                                </NavLink>
                                <button
                                    type="button"
                                    onClick={() => setDesktopBusinessesOpen((prev) => !prev)}
                                    className={`p-0 cursor-pointer ${scrolled ? "text-[#000080]" : "text-white"}`}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {desktopBusinessesOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white divide-y divide-[#D4D4D4] p-2 min-w-[250px] z-50">
                                        <NavLink to="/our-business/engineering" onClick={() => setDesktopBusinessesOpen(false)} className="block px-4 py-2 text-sm text-[#000080] hover:bg-gray-100">
                                            Engineering
                                        </NavLink>
                                        <NavLink to="/our-business/hospitality" onClick={() => setDesktopBusinessesOpen(false)} className="block px-4 py-2 text-sm text-[#000080] hover:bg-gray-100">
                                            Hospitality
                                        </NavLink>
                                        <NavLink to="/our-business/entertainment" onClick={() => setDesktopBusinessesOpen(false)} className="block px-4 py-2 text-sm text-[#000080] hover:bg-gray-100">
                                            Entertainment
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink to="/sustainability" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                Sustainability
                            </NavLink>
                            <NavLink to="/work-with-us" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                Careers
                            </NavLink>
                            <NavLink to="/contact" onClick={() => setDesktopBusinessesOpen(false)} className={`${linkBase} ${desktopLinkColor}`}>
                                Contact us
                            </NavLink>
                        </nav>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            className={`md:hidden text-sm ${scrolled || mobileOpen ? "text-[#000080]" : "text-white"}`}
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            {mobileOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile full-screen menu */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white h-screen">
                    <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 flex flex-col h-full">
                        {/* Top bar with logo and close icon */}
                        <div className="flex items-center justify-between mb-8">
                            <Link to="/" className="flex items-center gap-3" onClick={closeMobile}>
                                <img
                                    src="/images/ediz-group-footer-logo.svg"
                                    alt="Ediz Group"
                                    className="h-6 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                className="text-2xl text-[#000080]"
                                onClick={closeMobile}
                                aria-label="Close navigation"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto">
                            <NavLink to="/" onClick={closeMobile} className={mobileLinkBase}>
                                Home
                            </NavLink>
                            <hr className="border-[#D4D4D4]" />
                            <NavLink to="/about" onClick={closeMobile} className={mobileLinkBase}>
                                About us
                            </NavLink>
                            <hr className="border-[#D4D4D4]" />

                            {/* Our Businesses group */}
                            <div className="py-3">
                                <div className="flex items-center justify-between">
                                    <NavLink to="/our-business" onClick={closeMobile} className="text-xl text-[#000080]">
                                        Our Businesses
                                    </NavLink>
                                    <button
                                        type="button"
                                        onClick={() => setMobileBusinessesOpen((prev) => !prev)}
                                        className="text-[#000080] text-lg"
                                    >
                                        {mobileBusinessesOpen ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {mobileBusinessesOpen && (
                                    <div className="mt-2 ml-2 space-y-1">
                                        <NavLink
                                            to="/our-business/engineering"
                                            onClick={closeMobile}
                                            className="block text-sm text-[#000080] py-1"
                                        >
                                            Engineering
                                        </NavLink>
                                        <NavLink
                                            to="/our-business/hospitality"
                                            onClick={closeMobile}
                                            className="block text-sm text-[#000080] py-1"
                                        >
                                            Hospitality
                                        </NavLink>
                                        <NavLink
                                            to="/our-business/entertainment"
                                            onClick={closeMobile}
                                            className="block text-sm text-[#000080] py-1"
                                        >
                                            Entertainment
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                            <hr className="border-[#D4D4D4]" />

                            <NavLink to="/sustainability" onClick={closeMobile} className={mobileLinkBase}>
                                Sustainability
                            </NavLink>
                            <hr className="border-[#D4D4D4]" />
                            <NavLink to="/work-with-us" onClick={closeMobile} className={mobileLinkBase}>
                                Careers
                            </NavLink>
                            <hr className="border-[#D4D4D4]" />
                            <NavLink to="/contact" onClick={closeMobile} className={mobileLinkBase}>
                                Contact us
                            </NavLink>
                            <hr className="border-[#D4D4D4]" />
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderNav;