import Image from "next/image";
import Logout from "../components/Logout";
import { auth } from "../../auth";
import {ModeToggle} from "../components/ModeToggle";
import { redirect } from "next/navigation";

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"

const HomePage = async () => {
    const session = await auth();
    console.log(session);

    if (!session?.user) redirect("/");

    return (
        <div className="flex flex-col items-center m-4">
             <ModeToggle />
            
            <h1 className="text-3xl my-2">
                Welcome, {session?.user?.name}
            </h1>
            <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={72}
                height={72}
                className="rounded-full"
            />
            <Logout />
        </div>
    );
};

export default HomePage;
