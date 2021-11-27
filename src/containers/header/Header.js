import React from "react";
import './header.css'
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {Image, Transformation} from "cloudinary-react";
import useUser from "../../contexts/hooks/useUser";
import {useNavigate} from "react-router-dom";

export default function Header(){
    const {user, changeUser} = useUser()
    let navigate = useNavigate()

    function handleUser(){
        if(user.tipoUsuario){
            return (
                <Image publicId={"TorneosFutbol/clubes/avispa_fukuoka"}>
                    <Transformation height={50} weight={50} crop={"scale"} />
                </Image>
            )
        } else {
            return (
                navigate("/")
            )
        }
    }

    function logout(){
        changeUser(
            {
                tipoUsuario: ""
            }
        )
        navigate("/")
    }

    const leftContents = (
        <React.Fragment>
            {user.tipoUsuario ? handleUser() : null}
        </React.Fragment>
    )
    const rightContents = (
        <React.Fragment>
            <Button label={"Logout"} icon={"pi pi-fw pi-exit"} onClick={() => logout()}/>
        </React.Fragment>
    )

    if(user.tipoUsuario) {
        return (
            <div className={"header-container"}>
                <Toolbar left={leftContents} right={rightContents}/>
            </div>
        )
    }
    return (<div/>)
}