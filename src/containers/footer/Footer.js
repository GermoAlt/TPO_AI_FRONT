import React from "react";
import './footer.css'
import useUser from "../../contexts/hooks/useUser";
import CookieUtils from "../../utils/CookieUtils";

export default function Footer(){
    const {user, changeUser} = useUser()
    if(CookieUtils.getCookie("tipoUsuario")) {
        return (
            <div className={"footer-container"}>

            </div>
        )
    } else{
      return <div/>
    }
}