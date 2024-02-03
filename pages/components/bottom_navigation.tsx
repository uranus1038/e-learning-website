import {
FaHouse , 
FaCalendar , 
FaBell , 
FaBookmark
} from "react-icons/fa6";
export default function BottomNavigation() {
    return (
        <div className="fixed bottom-0  z-50 w-full h-20 bg-white  dark:bg-gray-800 ">
            <div className="grid h-full lg:w-1/2 w-full grid-cols-4 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
                    <FaHouse className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'/>
                    <span className="text-xs truncate font-light text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">หน้าแรก</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
                    <FaCalendar className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'/>
                    <span className="text-xs truncate font-light text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">ตารางกิจกรรม</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaBell className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'/>
                    <span className="text-sm truncate text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">แจ้งเตือน</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group  dark:border-gray-600">
                    <FaBookmark className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'/>
                    <span className="text-sm truncate text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">บุ๊คมาร์ค</span>
                </button>
            </div>
        </div>

    );
}
