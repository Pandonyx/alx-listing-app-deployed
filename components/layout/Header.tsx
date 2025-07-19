import React from 'react'
import Button from '../common/Button';
import Search from '../common/Search';
import Image from 'next/image';
import CategoryStrip from '../common/CategoryStrip';



const Header = () => {
    return (
        <header className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-center w-full px-2 py-1 bg-brand-teal">
                <Image src="/assets/icons/CaseM.png" alt="case" width={25} height={25} />
                <p className="px-2 text-sm text-white">Overseas trip? Get the latest information on travel guides</p>
                 <Button 
                    text="More info" 
                    onClick={() => console.log('More info clicked!')}
                    variant="secondary"
                    size="small"
                />

            </div>

            <div className="flex flex-row items-center w-full px-2 py-2">
                <div className="items-start px-4 py-2">
                    <a href="#"><Image src="/assets/icons/alxlogo.svg" alt="ALX logo" width={150} height={150} className="p-3" /></a>
                    
                </div>
                <div className="items-center justify-center w-full ">
                    <Search />
                </div>

                <div className="flex flex-row items-center justify-end flex-shrink-0 px-8 py-4 space-x-2">
                    <Button 
                    text="Sign in" 
                    onClick={() => console.log('Sign in clicked!')}
                    variant="primary"
                    size="small"
                    
                />
                
                    <Button 
                    text="Sign up" 
                    onClick={() => console.log('Sign up clicked!')}
                    variant="white"
                    size="small"
                    
                />
                 
                </div>

            </div>

            
            <CategoryStrip />
        </header>
    )
}

export default Header;
