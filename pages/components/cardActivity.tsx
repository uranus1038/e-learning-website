import {
    Card,
    Badge
} from 'flowbite-react';
import Image from "next/image";
export default function CardActivity() {
    return (
        <div className="grid grid-cols-3 gap-2 p-3 mt-14 ">
            <div className='h-96 w-fullcol-start-1 col-span-3 relative animation-move-up-1'>
                <Image loading="eager" className='rounded-2xl ' style={{ height: "100%", width: "100%" }} fill
                    objectFit="cover" src="/DbnH053X4AANsIx.jpg" alt="image 1" />
                <div className='absolute w-full text-center h-28 bottom-0 rounded-b-2xl bg-gradient-to-t from-blue-500 font-semibold text-white'>
                    <h6 className='text-slate-700 font-bold text-2xl' >Learn Anywhere</h6>
                    <h6 className='  text-md' >"เวลาจะไม่ใช่อุปสรรคในการเรียนอีกต่อไป</h6>
                    <h6 className='  text-sm' >สะดวกแบบไหน ตอนไหน ก็เข้าเรียนได้"</h6>
                    <Badge className='inline-flex me-2' color="warning">เริ่มต้นการเรียนรู้</Badge>
                </div>
            </div>
            <div className='h-72 w-full col-start-1 relative animation-move-up-1'>
                <Image loading="eager" style={{ height: "100%", width: "100%" }} fill
                className='rounded-2xl '  
                    objectFit="cover" src="/DbnH053X4AANsIx.jpg" alt="image 2" />
                <div className='absolute w-full text-center h-16 bottom-0 rounded-b-2xl bg-gradient-to-t from-pink-400 font-semibold text-white'>
                    <h6 className='  text-lg mt-5' >คลังความรู้</h6>
                </div>
            </div>
            <div className='h-72 w-full col-start-2 relative animation-move-up-2'>
                <Image loading="eager" fill className='rounded-2xl ' style={{ height: "100%", width: "100%" }}
                    objectFit="cover" src="/DbnH053X4AANsIx.jpg" alt="image 3" />
                <div className='absolute w-full text-center h-16 bottom-0 rounded-b-2xl bg-gradient-to-t from-blue-900 font-semibold text-white'>
                    
                    <h6 className='text-lg mt-5' >ห้องเรียน</h6>
                </div>
            </div>
            <div className='h-72 w-full col-start-3 relative animation-move-up-3'>
                <Image loading="eager" fill className='rounded-2xl ' style={{ height: "100%", width: "100%" }}
                    objectFit="cover" src="/DbnH053X4AANsIx.jpg" alt="image 4" />
                <div className='absolute w-full text-center h-16 bottom-0 rounded-b-2xl bg-gradient-to-t from-yellow-200 font-semibold text-slate-800'>
                    <h6 className='text-lg mt-5' >ชุมชน</h6>
                </div>
            </div>
            <div className='mb-6'></div>
            
           
        </div>
    );
}
