"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/event" },
    { name: "Jobs", href: "/job-section" },
  ];

  return (
    <nav className="bg-black text-white p-4 z-50 fixed top-0 left-0 right-0 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="text-2xl font-bold tracking-wider">HEAVEN</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-orange-400 transition ${
                pathname === item.href ? "text-orange-400" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* AUTH SECTION (DESKTOP) */}
        <div className="hidden md:flex items-center gap-5">
          {isPending ? (
            <div className="text-gray-400">Loading...</div>
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2 hover:opacity-80">
                <Image
                  src={session.user.image || "/profile-icon.png"}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-500"
                />
              </Link>

              <button
                onClick={() => signOut()}
                className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/signup">
              <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition">
                LOGIN/SIGNUP
              </button>
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 pb-4 px-4 bg-black border-t border-gray-700 space-y-5">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-lg py-2 ${
                pathname === item.href ? "text-orange-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* AUTH - MOBILE */}
          {isPending ? (
            <div className="text-gray-400">Loading...</div>
          ) : session?.user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2"
              >
                <Image
                  src={session.user.image || "/profile-icon.png"}
                  alt="profile"
                  width={35}
                  height={35}
                  className="rounded-full border border-gray-500"
                />
                <span>Profile</span>
              </Link>

              <button
                onClick={() => signOut()}
                className="bg-gray-700 px-4 py-2 rounded-md w-full hover:bg-gray-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/signup" onClick={() => setOpen(false)}>
              <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded-lg">
                LOGIN/SIGNUP
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}