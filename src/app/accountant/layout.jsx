"use client";
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AccountantLayout({ children }) {
    const pathname = usePathname();

    const navLinks = [
        { href: '/accountant', label: 'Home' },
        { href: '/accountant/clients', label: 'Client Accounting' },
        { href: '/accountant/billing', label: 'Tender & Invoices' },
        {href: '/accountant/clientbilling', label: 'Client Billing C5'}
    ];
  
    return (
        <div>
            {/* Top Nav */}
            <div className="bg-[#0E1B33] text-white px-6 py-4 flex justify-between items-center">
                <div className="flex gap-12 items-center">
                    <div className="font-bold text-xl flex items-center gap-2">
                        <div className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">F</div>
                        <span><Link href={'/'}>DevFleets</Link></span>
                    </div>
                        <nav className="flex gap-6 text-sm">
                                {navLinks.map((link) => (
                                    <span className="border-b-2 border-white pb-1 pathname === link.href ? 'active' : ''" key={link.href} >
                                        <Link href={link.href}>{link.label}</Link>
                                    </span>
                                ))}
                        </nav>
                </div>
                <div className="flex items-center gap-3 text-sm bg-white text-black px-3 py-1 rounded-full">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">A</div>
                    <div>
                        <div className="font-medium">Accountant</div>
                        <div className="text-xs text-gray-500">data</div>
                    </div>
                    <FaArrowLeft className="ml-3 text-lg text-gray-500 hover:text-black cursor-pointer" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
  }