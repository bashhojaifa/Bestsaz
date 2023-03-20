import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class MegaMenu extends Component {
    constructor(props) {
        super();
    }

    MenuItemClick = (event) => {
        event.target.classList.toggle("active");
        let panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }

    }

    render() {

        let ParentList = this.props.data;
        let MyView = ParentList.map((ParentList, i) => {
            return <div>
                <Button onClick={this.MenuItemClick} className="accordion"><img key={i.toString()} className="accordionMenuIcon"
                                                                                src={ParentList.ParentCategoryImg}/>{ParentList.ParentCategoryName}
                </Button>
                <div className="panel">
                    <ul>
                        {
                            (ParentList.SubCategory).map((ChildList, i) => {
                                return <Link className="accordionItem" to={"ProductListBySubCategory/"+ChildList.cat1_name+"/"+ChildList.cat2_name}><li>{ChildList.cat2_name}</li></Link>
                            })
                        }
                    </ul>
                </div>
            </div>
        })

        return (
            <div className="accordionMenuDiv mt-5">
                <div className="accordionMenuDivInside">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenu;