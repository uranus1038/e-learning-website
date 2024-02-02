import {
    Button,
} from 'flowbite-react';
import {

} from "react-icons/fa6";
export default function ActivityButton() {
    return (
            <div className='flex justify-between w-full p-3 gap-2 sticky top-0 z-50'>
                <Button size={"xs"} color='gray'  className='w-full   py-1 font-semibold '>กิจกกรรม</Button>
                <Button size={"xs"}  gradientDuoTone="purpleToBlue" className='w-full  py-1  font-semibold'>การเรียนรู้</Button>
                <Button size={"xs"} color='gray'  className='w-full  font-semibold  py-1'>แบบฝึกหัด</Button>
        </div>
    );
}
