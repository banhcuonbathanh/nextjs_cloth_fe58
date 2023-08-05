"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = [...data].map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  // Add the "Home" route at the first position in the array
  routes.unshift({
    href: "/", // Replace with the actual home page link
    label: "Home",
    active: pathname === "/" // Replace with the actual active state for the home page
  });

  return (
    <nav className="relative px-4 pt-6 mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm lg:text-lg font-medium transition-colors hover:text-black",
            {
              "text-black": route.active,
              "text-neutral-500": !route.active,
              "border-b-2 border-black": route.active // Add underline for active route
            }
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
