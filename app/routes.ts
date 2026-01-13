import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("our-business", "routes/ourBusiness/ourBusiness.tsx"),
    route("our-business/engineering", "routes/ourBusiness/engineering.tsx"),
    route("our-business/hospitality", "routes/ourBusiness/hospitality.tsx"),
    route("our-business/entertainment", "routes/ourBusiness/entertainment.tsx"),
    route("sustainability", "routes/sustainability.tsx"),
    route("contact", "routes/contact.tsx"),
    route("work-with-us", "routes/workWithUs.tsx"),
] satisfies RouteConfig;
