import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const menuKendariKita: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Sejarah Kota kendari",
      href: "/kendari-kita/sejarah-kota-kendari",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Visi & Misi",
      href: "/kendari-kita/visi-misi",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Profil Walikota",
      href: "/kendari-kita/walikota",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Profil Wakil Walikota",
      href: "/kendari-kita/wakil-walikota",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Pejabat Pemerintah",
      href: "/kendari-kita/pejabat-pemerintah",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Perangkat Daerah",
      href: "/kendari-kita/perangkat-daerah",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const menuDirektori: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Wisata",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Institusi Pendidikan",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Rumah Sakit",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Rumah Ibadah",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Pusat Perbelanjaan",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Hiburan",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
      title: "Kelurahan & Kecamatan",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
      title: "Olahraga",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
      title: "Transportasi",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const menuEvent: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Agenda",
      href: "/event/agenda",
      description:
        "popup that displays information related to an element when the element receives keyboard focus or the mouse hovers",
    },
    {
      title: "Pengumuman",
      href: "/event/pengumuman",
      description:
        "popup that displays information related to an element when the element receives keyboard focus or the mouse hovers",
    },
  ];

  // Handle scrool nav
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-[995] fixed transform w-full backdrop-blur-sm top-0 shadow transition-all translate-y-0 lg:translate-y-[28px] bg-black/20 text-white font-sen ease-out ${
        isScrolled && "!translate-y-[0px] !bg-[#173454]/95 !backdrop-blur"
      }`}
    >
      <div
        className={`navbar container flex items-center justify-between h-14 lg:h-16 transition-all lg:transition-none ${
          isScrolled && "!h-12 lg:!h-14"
        }`}
      >
        <img
          className={`w-36 lg:w-56 text-black ${
            isScrolled && "!w-36 lg:!w-52"
          }`}
          src="/img/logo.svg"
          alt="logo"
        />
        {/* Breadcrumb */}
        <span className="block lg:hidden text-white text-xl">
          <i className="fa-solid fa-bars"></i>
        </span>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={route("home")}>Beranda</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuTrigger>Kendari Kita</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menuKendariKita.map((component) => (
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

            <NavigationMenuItem className="nav__link">
              <NavigationMenuTrigger className="nav__link">
                Direktori
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menuDirektori.map((component) => (
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

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <a target="_blank" href="https://berita.kendarikota.go.id">
                  Berita
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuTrigger className="nav__link">
                Event
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menuEvent.map((component) => (
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

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={route("home")}>Arsip</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={route("home")}>Peraturan Daerah</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={route("home")}>Statistik</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="font-dmsans line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
