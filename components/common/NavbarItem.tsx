"use client";

import * as React from "react";

import cn from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  items: { title: string; href: string; description: string }[];
}[] = [
  {
    title: "Find EV Cars",
    items: [
      {
        title: "Alert Dialog",
        href: "/",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Progress",
        href: "/",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    ],
  },
  {
    title: "EV Guides",
    items: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    ],
  },
];

type Props = {
  title: string;
  href: string;
  children: React.ReactNode;
};

const ListItem = React.forwardRef(
  (
    { title, children, ...props }: Props,
    ref: React.LegacyRef<HTMLAnchorElement> | undefined,
  ) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);

export default function NavbarItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col lg:flex-row items-start">
        {components.map((nav) => (
          <NavigationMenuItem key={nav.title}>
            <NavigationMenuTrigger className="font-semibold">
              {nav.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[280px] lg:w-auto ">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {nav.items.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
