import { useState } from "react"
import { DashboardIcon } from "../icons/DashboardIcon"
import { GroupIcon } from "../icons/GroupIcon"
import { Avatar } from "./Avatar"

export const Header = () => {
    const [initials,setInitials] = useState("AS")

    return <header className="px-10 md:px-16 lg:px-28 flex justify-between items-center w-screen h-16 bg-brand-950 sticky top-0 text-white">
        <div className="flex gap-10 md:gap-12 lg:gap-16 items-center  text-xl">
            <img src="../../public/EqualifyLogo.png" className="h-12" />
            <div className="flex gap-4"><DashboardIcon /><span className="hidden md:block">Dashboard</span></div>
            <div className="flex gap-4"><GroupIcon /><span className="hidden md:block">Groups</span></div>
        </div>
        <Avatar initials={initials} />
    </header>
}