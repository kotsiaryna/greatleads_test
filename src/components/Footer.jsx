import {Link, Button, ButtonGroup} from "@nextui-org/react";
import {Gmail}  from '../assets/gmail.jsx'
import {LinkedIn}  from '../assets/linkedin.jsx'
import { Telegram } from "../assets/telegram.jsx";

function Footer() {
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto mb-6">
       <Link href="#" underline="hover" isBlock className="text-orange-700 italic bg-amber-100 rounded-lg h-8">LOGO</Link>
       <ButtonGroup className="w-max flex gap-20" radius="none"> 
        <Link href="mailto:talkachova.k@gmail.com"> <Button isIconOnly className="bg-white"><Gmail/></Button></Link>
        <Link href="https://www.linkedin.com/in/katsiarynatalkachova/"><Button isIconOnly  className="bg-white"> <LinkedIn /></Button> </Link>
        <Link href="https://t.me/katrin_awsm"> <Button isIconOnly className="bg-white"> <Telegram /></Button> </Link>
       </ButtonGroup>
    </div>
  )
}

export default Footer