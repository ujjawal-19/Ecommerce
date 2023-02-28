import React from "react";
import './Commerce.css';
import CommerceItem from './CommerceItem';

const Commerce = (props) => {

    return (
        <div className="ecommerce">
            
        {
            props.item.map( commerce => {
                return (
                    <CommerceItem
                        key={commerce.id}
                        title={commerce.title}
                        description={commerce.description}
                        price={commerce.price}
                        discountpercentage={commerce.discountPercentage}
                        rating={commerce.rating}
                        stock={commerce.stock}
                        brand={commerce.brand}
                        category={commerce.category}
                        
                        images={commerce.images[0]} />
                );
            })
        }
        </div>
    );
};

export default Commerce;