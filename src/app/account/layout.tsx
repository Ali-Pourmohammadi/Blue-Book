import SideNavigation from "../_components/SideNavigation";
import "@/app/globals.css"

export default function Layout({children}){
    return (
        <div className="container mx-auto px-4 py-4 gap-4 flex w-3/4 bg-white shadow-lg rounded-lg mt-5">
        <SideNavigation /> {/* Assuming SideNavigation is your sidebar component */}
        <div className="py-1 w-full">{children}</div>
      </div>)
}