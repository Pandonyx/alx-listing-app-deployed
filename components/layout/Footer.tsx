'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-4 pt-10 pb-6 text-sm text-white bg-[#222222] pt md:px-8 lg:px-10">
            <div className="container flex flex-col justify-between gap-10 mx-auto md:flex-row">
              <div className="max-w-md">
                  <Image src="/assets/icons/alxlogowhite.svg" alt="ALX logo" width={60} height={80}/> 
                <div className="inline-block py-4 mb-4">
                  <p className="text-gray-300">ALX is a platform where travelers can discover and book unique, confortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>                  
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap md:gap-16">

              <div className="w-1/2 sm:w-auto">
                <h4 className="mb-2 font-semibold">Explore</h4>
                <ul className="space-y-1 text-gray-300">
                    <li><Link href="#">Apartments in Dubai</Link></li>
                    <li><Link href="#">Hotels in New York</Link></li>
                    <li><Link href="#">Villa in spain</Link></li>
                    <li><Link href="#">Mansion in Indonesia</Link></li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-auto">
                <h4 className="mb-2 font-semibold">Company</h4>
                <ul className="space-y-1 text-gray-300">
                    <li><Link href="#">About us</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Career</Link></li>
                    <li><Link href="#">Customers</Link></li>
                    <li><Link href="#">Brand</Link></li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-auto">
                <h4 className="mb-2 font-semibold">Help</h4>
                <ul className="space-y-1 text-gray-300">
                    <li><Link href="#">Support</Link></li>
                    <li><Link href="#">Contact Booking</Link></li>
                    <li><Link href="#">Refunds Process</Link></li>
                </ul>
              </div>
            </div>
            </div>

            <div className="container flex items-center justify-between flex-auto pt-4 mx-auto text-xs text-gray-300 border-t border-gray-700 mt- 10 md:flex-row">
              <p className="mb-4 text-center md:mb-0 md:text-left">Some hotel requires you to cancel more than 24 hours before check-in. Details <Link href="#" className="text-brand-teal">here</Link></p>
              <div className="flex flex-wrap justify-center gap-6 mt-4 md:justify-end md:mt-0">
                  <Link href="">Terms of Service</Link>
                  <Link href="">Policy service</Link>
                  <Link href="">Cookies Policy</Link>
                  <Link href="">Partners</Link>
              </div>
            </div>
        </footer>
    )
}

export default Footer;
             