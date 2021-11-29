import React from "react";
import './menuPanel.css'
import {Image, Transformation} from "cloudinary-react";
import {Link} from "react-router-dom";

export default function MenuPanel(props) {

    const generateMenuItems = (data) => {
        return data.map(generateItem)
    }

    const generateItem = (item) => {
        return (
            <Link to={item.url} className={""} key={item.title}>
                <div className={"p-d-flex p-flex-column p-card menu-panel-item-card"}>
                    <Image publicId={item.image}>
                        <Transformation effect="replace_color:6ABD6E"/>
                        <Transformation height="200" width="200" crop="scale" />
                    </Image>
                    <div>
                        <p className={"title menu-item-text"}>{item.title}</p>
                    </div>
                </div>
            </Link>
        )
    }

    return(
        <div className={"menu-panel-container"}>
            {generateMenuItems(props.menuItems)}
        </div>
    )
}