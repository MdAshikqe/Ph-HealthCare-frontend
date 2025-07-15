
export const setToLocalStorge=(key:string,token:string)=>{
    if(!key || typeof window ==="undefined"){
        return "";
    }
    return localStorage.setItem(key,token)
}

export const getLocalStorge=(key:string)=>{
    if(!key || typeof window === "undefined"){
        return "";
    }

    return localStorage.getItem(key)
}

export const removeFromLocalStorge=(key:string)=>{
    if(!key || typeof window ==="undefined"){
        return "";
    }
    return localStorage.removeItem(key)
}