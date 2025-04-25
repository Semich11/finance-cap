import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <SheetTitle>
                    <Menu className="text-white"/>
                </SheetTitle>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left" >
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}