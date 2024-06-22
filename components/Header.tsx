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

interface MenuItem {
  name: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("Projects");

  const menuItems: MenuItem[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkPress = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false); // Close the menu on link press
  };

  const renderMenuItems = (items: MenuItem[], isMobile: boolean = false) =>
    items.map((item) => (
      isMobile ? (
        <NavbarMenuItem key={item.name}>
          <Link
            color={activeLink === item.name ? "primary" : "foreground"}
            className="w-full"
            href={item.href}
            size="lg"
            onPress={() => handleLinkPress(item.name)}
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ) : (
        <NavbarItem key={item.name} isActive={activeLink === item.name}>
          <Link
            color="foreground"
            href={item.href}
            onPress={() => handleLinkPress(item.name)}
            aria-current={activeLink === item.name ? "page" : undefined}
          >
            {item.name}
          </Link>
        </NavbarItem>
      )
    ));

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
        {renderMenuItems(menuItems)}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <ThemeSwitcher /> {/* Add the ThemeSwitcher component */}
      </NavbarContent>

      <NavbarMenu>
        {renderMenuItems(menuItems, true)}
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
