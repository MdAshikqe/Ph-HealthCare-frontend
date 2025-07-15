"use client"
import { getUserInfo, removeUser } from "@/Service/authService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton=()=>{
        const router=useRouter()
        const userInfo= getUserInfo();
        const handleLogout=()=>{
            removeUser();
            router.refresh();
        }
    return <>
        {userInfo?.email ? <Button onClick={handleLogout} color="error">Logout</Button>: <Button component={Link} href="/login">Login</Button>}
    </>
}

export default AuthButton;