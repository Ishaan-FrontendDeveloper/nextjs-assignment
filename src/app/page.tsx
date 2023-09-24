import SideBarLeft from './sidebarLeft.tsx';
import SideBarRight from './sidebarRight.tsx'
export default function Page(){
    return(
    <main className="flex overflow-hidden ">
    <div className="relative bg-blue-600 w-1/2  h-screen rotate-6 scale-125"></div>
    <div className="absolute flex w-5/6 justify-between ">
    <SideBarLeft/>
    <SideBarRight/>
    </div>
    </main>
    )
  }
