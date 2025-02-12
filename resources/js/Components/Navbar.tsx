import { Link, usePage } from "@inertiajs/react";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import {
  menuArsip,
  menuEvent,
  menuKendariKita,
  menuPeraturanDaerah,
  menuStatistik,
  navProgramKotaku,
} from "@/lib/constant";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { globalDirektori }: any = usePage().props;

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
            {/* Beranda */}
            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={route("home")}>Beranda</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Program Kotaku */}
            <NavigationMenuItem className="nav__link">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle() + " cursor-pointer"}
                    asChild
                  >
                    <span>
                      {navProgramKotaku.title}
                      <ChevronDown
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </NavigationMenuLink>
                </DropdownMenuTrigger>
                {/* Dropdown menu */}
                <DropdownMenuContent className="font-medium w-full z-[999] font-sen">
                  <DropdownMenuGroup>
                    {navProgramKotaku.menu.map((item, i) =>
                      item.subMenu ? (
                        <DropdownMenuSub key={`menu-${i}`}>
                          <DropdownMenuSubTrigger>
                            {item.label}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="font-sen font-medium">
                              {item.subMenu.map((list, j) =>
                                list.subMenu ? (
                                  <DropdownMenuSub key={`submenu-${i}-${j}`}>
                                    <DropdownMenuSubTrigger className="max-w-72">
                                      {list.label}
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                      <DropdownMenuSubContent className="font-sen font-medium">
                                        {list.subMenu.map((m, k) => (
                                          <DropdownMenuItem
                                            key={`submenu-item-${i}-${j}-${k}`}
                                          >
                                            <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href={m.url}
                                            >
                                              {m.label}
                                            </a>
                                          </DropdownMenuItem>
                                        ))}
                                      </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                  </DropdownMenuSub>
                                ) : (
                                  <DropdownMenuItem key={`item-${i}-${j}`}>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={list.url}
                                    >
                                      {list.label}
                                    </a>
                                  </DropdownMenuItem>
                                )
                              )}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ) : (
                        <DropdownMenuItem key={`menu-item-${i}`} asChild>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.label}
                          </a>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuTrigger className="nav__link">
                {menuKendariKita.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menuKendariKita.menu.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
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
                  {globalDirektori.map((item: any) => (
                    <ListItem
                      key={item.id}
                      title={item.nama}
                      href={"/direktori/" + item.slug}
                    >
                      {item.deskripsi}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuTrigger className="nav__link">
                {menuEvent.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {menuEvent.menu.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
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
                <Link href={menuArsip.url}>{menuArsip.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={menuPeraturanDaerah.url}>
                  {menuPeraturanDaerah.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="nav__link">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={menuStatistik.url}>{menuStatistik.label}</Link>
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
