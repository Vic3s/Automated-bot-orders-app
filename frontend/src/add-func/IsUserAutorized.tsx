import { useState } from "react";

export const setAuthRequestHeaders = (token?: string): RequestInit => {

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if(token){
        headers["Authorization"] = token;
    }
   
    return {
        method: "Get",
        headers
    }
}


export const IsUserAuthorized = (headers: RequestInit): Promise<boolean> => {
    return fetch("http://localhost:5000/is-user-authenticated", headers)
    .then(response => response.json())
    .then(data => data.isUserLogged)
    .catch(err => {console.log(err)
        return false;
    });
}