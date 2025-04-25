import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({children}: Props) => {
    return(
        <>
            <MobileHeader/>
            <Sidebar className="hidden lg:flex"/> 
            <main className="lg:pl-[256px] h-full lg:pt-[0px]">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout;