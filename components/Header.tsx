// app/components/Header.tsx
"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher"; // Import the ThemeSwitcher component

type MenuItem = {
  name: string;
  href: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("Projects");

  const menuItems: MenuItem[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Portfolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={activeLink === item.name}>
            <Link
              color="foreground"
              href={item.href}
              onClick={() => handleLinkClick(item.name)}
              aria-current={activeLink === item.name ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <ThemeSwitcher /> {/* Add the ThemeSwitcher component */}
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color={activeLink === item.name ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
              onClick={() => handleLinkClick(item.name)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex justify-between items-center w-full">
            <span>Dark Mode</span>
            <ThemeSwitcher />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
