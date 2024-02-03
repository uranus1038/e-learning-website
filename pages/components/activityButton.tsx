import {
    Button,
} from 'flowbite-react';
import {

} from "react-icons/fa6";
export default function ActivityButton() {
    return (
            <div className='flex justify-between w-full p-3 gap-2 sticky top-0 z-50'>
                <Button size={"md"} color='dark' 
                theme={{color:{dark:"text-gray-900 bg-gray-900 bg-white border border-transparent enabled:hover:bg-gray-100 enabled:hover:text-white :ring-cyan-700 focus:text-white dark:text-gray-500 dark:bg-gray-700 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"}}}
                  className='w-full   py-1 font-semibold '>กิจกกรรม</Button>
                <Button size={"md"}  gradientDuoTone="purpleToBlue" className='w-full  py-1  font-semibold'>การเรียนรู้</Button>
                <Button size={"md"} color='dark' 
                theme={{color:{dark:"text-gray-900 bg-gray-900 bg-white border border-transparent enabled:hover:bg-gray-100 enabled:hover:text-white :ring-cyan-700 focus:text-white dark:text-gray-500 dark:bg-gray-700 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"}}}
                 className='w-full  font-semibold  py-1'>แบบฝึกหัด</Button>
        </div>
    );
}
