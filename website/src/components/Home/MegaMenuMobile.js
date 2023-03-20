import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class MegaMenuMobile extends Component {
    constructor() {
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();
    }

    MegaMenu() {
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        for (let i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px"
                }
            })

        }
    }

    render() {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    <Button className="accordionMobile"><img className="accordionMenuIconMobile"
                                                       src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's
                        Clothing</Button>
                    <div className="panelMobile">

                    </div>
                    <Button className="accordionMobile"><img className="accordionMenuIconMobile"
                                                       src="https://demo.ecom.rabbil.com/static/media/tshirt.87175310.svg"/> Men's
                        Clothing</Button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItemMobile"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItemMobile"></a>Man Shirt</li>
                            <li><a href="#" className="accordionItemMobile"></a>Man Shirt</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;