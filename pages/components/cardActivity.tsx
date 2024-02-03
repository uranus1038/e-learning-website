import {
    Card,
    Badge
} from 'flowbite-react';
import Image from "next/image";
export default function CardActivity() {
    return (
        <div className="grid grid-cols-3 gap-1 p-3 mt-14 ">
            <div className='h-96 w-fullcol-start-1 col-span-3 relative animation-move-up-1'>
                <Image loading="eager" className='rounded-2xl ' style={{ height: "100%", width: "100%" , objectFit: 'cover' }} fill
                    src="/img/index/learnAnywhere.png" alt="image 1" />
            </div>
            <div className='h-72 w-full col-start-1 relative animation-move-up-1'>
                <Image loading="eager" style={{ height: "100%", width: "100%" }} fill
                className='rounded-2xl '  
                     src="/img/index/library.png" alt="image 2" />
            </div>
            <div className='h-72 w-full col-start-2 relative animation-move-up-2'>
                <Image loading="eager" fill className='rounded-2xl ' style={{ height: "100%", width: "100%" , objectFit: 'cover' }}
                objectFit="cover" src="/img/index/learningRoom.png" alt="image 3" />
            </div>
            <div className='h-72 w-full col-start-3 relative animation-move-up-3'>
                <Image loading="eager" fill className='rounded-2xl ' style={{ height: "100%", width: "100%" , objectFit: 'cover' }}
                 src="/img/index/comunityLearning.png" alt="image 4" />
            </div>
            <div className='mb-6'></div>
         </div>
    );
}
