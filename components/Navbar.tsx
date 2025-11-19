
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-black text-white p-4 z-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt='logo' width={100} height={100}/>
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

           <Link href='/login'><button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          LOGIN/SIGNUP
        </button></Link>
        </div>
      </div>
    </nav>
  );
}
