import Fotter from "@/components/Shared/Fotter/Fotter";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout=({children}:{children:React.ReactNode})=>{
    return <>
        <Navbar></Navbar>
        <div className="min-h-screen">{children}</div>
        <Fotter></Fotter>
    </>

}

export default CommonLayout;