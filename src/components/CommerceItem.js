import React from "react";
import './CommerceItem.css';

const CommerceItem = (props) => {
    return (
    <div className="commerce-item">
        <div className="commerce-item__images">
        <img className="img" src={props.images} ></img>
        
        </div>

        <div className="commerce-item__description">
        
             <h2>{props.title}</h2>
             <h4>:{props.description}</h4>
             <div className="commerce-item__brand">Brand:{props.brand}     Stock Left:{props.stock}    Rating:{props.rating}</div>
             <div className="commerce-item__price">${props.price}</div>
             <div className="commerce-item__discount"> {props.discountpercentage} %off</div>
        </div>
   </div>
    );
};

export default CommerceItem;