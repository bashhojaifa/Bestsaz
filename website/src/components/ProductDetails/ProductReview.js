import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class ProductReview extends Component {
    constructor() {
        super();
        this.state = {
            ReviewData: [],

        }
    }

    componentDidMount() {
        let code = this.props.code;
        axios.get(ApiURL.GetReview(code)).then(
            response => {
                if (response.status == 200) {
                    this.setState({ReviewData: response.data});
                }
            }
        ).catch(

        );
    }

    render() {
        let data = this.state.ReviewData;
        var ReviwerData = data.map((data, i) => {
            return (
                <div>
                    <h5 className="section-title">{data.reviewer_name}<span><i

                        className="fas fa-star"></i></span></h5>
                    <p className="section-sub-title">{data.reviewer_comments}</p>
                </div>

            );
        });
        return (
            <Fragment>
                <h4 className="details-section-title my-4">Reviews</h4>
                {ReviwerData}
            </Fragment>
        );
    }
}

export default ProductReview;