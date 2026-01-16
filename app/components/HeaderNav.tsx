import React from "react";
import { Link, NavLink } from "react-router";

const linkBase =
    "text-sm md:text-[13px] text-white/90 hover:text-white transition-colors px-3 py-2";

const HeaderNav = () => {
    return (
        <header className="absolute top-0 inset-x-0 z-50">
            <div className="px-4">
                <div className="mt-3 rounded-md">
                    <div className="mx-auto max-w-7xl  flex items-center justify-between px-4 py-3">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/images/ediz-group-logo.svg"
                                alt="Ediz Group"
                                className="h-6 w-auto"
                            />
                        </Link>

                        <nav className="hidden md:flex items-center">
                            <NavLink to="/" className={linkBase}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={linkBase}>
                                About us
                            </NavLink>
                            <NavLink to="/our-business" className={linkBase}>
                                Our Businesses
                            </NavLink>
                            <NavLink to="/sustainability" className={linkBase}>
                                Sustainability
                            </NavLink>
                            <NavLink to="/work-with-us" className={linkBase}>
                                Careers
                            </NavLink>
                            <NavLink to="/contact" className={linkBase}>
                                Contact us
                            </NavLink>
                        </nav>

                        {/* Mobile menu (minimal) */}
                        <div className="md:hidden">
                            <NavLink to="/contact" className="text-white/90 text-sm">
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderNav;