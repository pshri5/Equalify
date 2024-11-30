import { useEffect, useState } from "react"
import { DashboardIcon } from "../icons/DashboardIcon"
import { GroupIcon } from "../icons/GroupIcon"
import { Avatar } from "./Avatar"


const gernericStyles = "z-50 px-10 md:px-16 lg:px-28";

export const Header = (props) => {
    const [initials,setInitials] = useState("")
    useEffect(()=>{
        const value = props.name.split(" ").map((word)=> word.charAt(0))
                        .slice(0,2).join("");
        setInitials(value);
    });

    return <header className={`${gernericStyles} flex justify-between items-center md:w-screen h-16 bg-brand-950 sticky top-0 text-white`}>
        <div className="flex gap-10 md:gap-12 lg:gap-16 items-center  text-xl">
            <img src="../../public/EqualifyLogo.png" className="h-12" />
            <div className="flex gap-4"><DashboardIcon /><span className="hidden md:block">Dashboard</span></div>
            <div className="flex gap-4"><GroupIcon /><span className="hidden md:block">Groups</span></div>
        </div>
        <Avatar initials={initials} />
    </header>
}