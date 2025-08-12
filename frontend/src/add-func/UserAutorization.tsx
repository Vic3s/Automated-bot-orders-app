import { DeleteCartObject } from "./CartLocalStorage";

export const SetAuthRequestHeaders = (method: string, body: Object, token?: string): RequestInit => {

     const reqSettingsObject: any = {
        method: method,
    }

    const headers: Record<string, string> = {
        "Content-Type": "application/json"
    }
    reqSettingsObject['headers'] = headers;

    if(token){
        headers["Authorization"] = token;
    }

    if(Object.entries(body).length != 0){
        reqSettingsObject["body"] = JSON.stringify(body);
    }

    return reqSettingsObject
}

export const GetCookie = (cookieName: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        
        if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export const DeleteCookie = (cookieName: string) => {
    document.cookie = cookieName + '=; Max-Age=0; path=/; domain=' + location.hostname + ';';
    DeleteCartObject()

}


export const IsUserAuthorized = (headers: RequestInit): Promise<boolean> => {
    return fetch("http://localhost:5000/is-user-authenticated", headers)
    .then(response => response.json())
    .then(data => data.isUserLogged)
    .catch(err => {console.log(err)
        return false;
    });
}
