import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ediz Group" },
    { name: "description", content: "Welcome to Ediz Group!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}
