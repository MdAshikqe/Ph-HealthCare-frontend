import { authKey } from "@/constant/authKey"
import { decodedToken } from "@/utils/jwt"
import { getLocalStorge, removeFromLocalStorge, setToLocalStorge } from "@/utils/local-storge"

export const storeUserInfo=(accessToken:string)=>{
        return setToLocalStorge(authKey,accessToken)
}

export const getUserInfo= ()=>{
    const authToken= getLocalStorge(authKey);
    if(authToken){
        const decodedData:any= decodedToken(authToken)
        return {
            ...decodedData,
            role:decodedData?.role.toLowerCase(),
        }
    }
}
export const isloggedIn=()=>{
    const authToken= getLocalStorge(authKey)
    if(authToken){
        return !!authToken
    }
}

export const removeUser=()=>{
    return removeFromLocalStorge(authKey)
}