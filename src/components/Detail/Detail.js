import React from 'react';

const Detail = (props) => {
    const detail = props.detail;


    let total =0;
    for (let i = 0; i < detail.length; i++) {
        const player = detail[i];
        total = Math.round(total + player.salary);
        parseInt(total);
        
    }
    return (
        <div>
            <h3 >All player</h3>
            <h4>Player Select:{detail.length} </h4>
            <p>Salary:{total}</p>
            {/* <p><small>PRODUCT PRICE:{total}</small></p>
            <p><small>SHIPPING COST:{shipping}</small></p> */}
        </div>
    );
};

export default Detail;