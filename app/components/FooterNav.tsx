import React from "react";
import { Link } from "react-router";

const FooterNav = () => {
    return (
        <footer className="mt-24 bg-[#F0F2F5]">
            <div className="mx-auto max-w-7xl  px-4 py-10">
                <div className="flex justify-between">
                    <div className="mt-10">
                        <img
                            src="/images/ediz-group-footer-logo.svg"
                            alt="Ediz Group"
                            className="h-6 w-auto "
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-[15px] text-neutral-700">
                        <div>
                            <h4 className="font-medium uppercase text-[15px] text-[#000080] mb-3">Explore</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="">Home</Link></li>
                                <li><Link to="/about" className="">About us</Link></li>
                                <li><Link to="/sustainability" className="">Sustainability</Link></li>
                                <li><Link to="/work-with-us" className="">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium uppercase text-[15px] text-[#000080] mb-3">Our Businesses</h4>
                            <ul className="space-y-2">
                                <li><Link to="/our-business/engineering" className="">Engineering</Link></li>
                                <li><Link to="/our-business/hospitality" className="">Hospitality</Link></li>
                                <li><Link to="/our-business/entertainment" className="">Entertainment</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium uppercase text-[15px] text-[#000080] mb-3">Contact</h4>
                            <ul className="space-y-1">
                                <li>info@edizgroup.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex border-t pt-12 border-[#D4D4D4] justify-between text-[12px] text-neutral-500">
                    <p>© {new Date().getFullYear()} Ediz Group. All Rights Reserved</p>
                    <p className="">Site by Ensio Creative</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;