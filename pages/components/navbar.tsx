import {
    Navbar,
    NavbarBrand,
    DarkThemeToggle, Flowbite,
} from 'flowbite-react';
import {
    FaMagnifyingGlass,
    FaBarsStaggered
} from "react-icons/fa6";
export default function NavbarMain() {
    return (
        <Navbar className=' pl-5 pr-5 pt-3 pb-3 '>
            <NavbarBrand>
                <FaMagnifyingGlass className=' text-slate-700 text-md' />
            </NavbarBrand>
            <div className="flex md:order-2 items-center">
                <Flowbite>
                    <DarkThemeToggle className='me-5'/>
                </Flowbite>
                <FaBarsStaggered className='text-slate-700 text-lg' />

            </div>
        </Navbar>
    );
}
