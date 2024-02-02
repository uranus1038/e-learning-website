import { ReactNode } from 'react';
import BottomNavigation from './bottom_navigation';
export default function Layout({children}:{children:ReactNode}) {
    return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-2 w-full h-full mx-auto">
            <div className='col-start-4 col-span-6 h-screen '>
                {children}
                <BottomNavigation/>
            </div>
        </div>
    );
}
