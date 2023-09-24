import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {BiLogoDiscord} from 'react-icons/bi'
export default function SideBarLeft(){
    return (
    <>
    <div className="items-center flex flex-col font-bold h-screen justify-between p-3  text-white w-1/2  ">
    
    <h1 className="self-start">logo</h1>
    <h1 className="text-center text-7xl text-white">.Board</h1>
    <ul className="list flex gap-4 text-4xl text-center text-white">
    <li><AiFillGithub/></li>
    <li><BiLogoDiscord/></li>
    <li><AiFillTwitterCircle/></li>
    <li><AiFillLinkedin/></li>
    </ul>
    </div>
    </>
    )
  }
