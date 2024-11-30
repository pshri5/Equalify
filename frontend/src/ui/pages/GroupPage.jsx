import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { AddIcon } from "../icons/AddIcon";
import { GroupCard } from "../components/GroupCard";

const gernericStyles = "px-10 md:px-16 lg:px-28 py-10";

export const GroupPage = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const createGroupLabel = isMobile ? "" : "Create Group"

    return <>
        <Header name="Ankit Sharma" />
        <div className={gernericStyles}>
            <div className="flex justify-between align-middle flex-wrap">
                <div className="text-4xl font-bold flex items-center">My Groups</div>
                <Button size="sm" label={createGroupLabel} endIcon={<AddIcon />} />
            </div>
            <div className="my-10 flex gap-4 flex-wrap">
                {props.groupList.map((group,idx) => (
                    <div key={idx}>
                        <GroupCard name={group.name} description={group.description} members={group.members} spending={group.spending} />
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
}