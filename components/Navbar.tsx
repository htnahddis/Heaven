"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  return (
    <nav className="bg-black text-white p-4 z-1000 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <span className="text-2xl font-bold tracking-wider">HEAVEN</span>
        </div>

        <div className="flex gap-6">
          <Link 
            href="/" 
            className={`hover:text-orange-400 transition ${pathname === '/' ? 'text-orange-400' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/event" 
            className={`hover:text-orange-400 transition ${pathname === '/event' ? 'text-orange-400' : ''}`}
          >
            Events
          </Link>
          <Link 
            href="/job-section" 
            className={`hover:text-orange-400 transition ${pathname === '/job-section' ? 'text-orange-400' : ''}`}
          >
            Jobs
          </Link>

      
        </div>

        {isPending ? (
          <div className="text-gray-400">Loading...</div>
        ) : session?.user ? (
          <div className="flex items-center gap-3">
            <Link href="/profile" className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <Image 
                src={session.user.image || "/profile-icon.png"} 
                alt="profile" 
                width={50} 
                height={50} 
                className="rounded-full border border-gray-300 mr-5" 
              />
              {/* <span className="font-semibold">{session.user.name}</span> */}
            </Link>
            <button 
              onClick={() => signOut()} 
              className="bg-gray-600 text-white px-3 py-2 rounded-md hover:opacity-80"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/signup">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              LOGIN/SIGNUP
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}