import React from "react";
import Body from "./Body";


function CheckOut(props){

    // console.log(item.price)

    return(
        <div className="row text-center">
            <div className="col-sm-12 overflow-auto">
                
            <h6>Item: {props.itemName}</h6>
            <h6>Price: ${props.itemPrice}</h6>
            <h3>---------------</h3>
            </div>
        </div>
    )
}

function Price(props){
    const[subTotal, setSubTotal] = React.useState([])
    console.log(subTotal)

    function AddPrice(){
        setSubTotal(prevSubTotal => [...prevSubTotal + setSubTotal])
    }

    

    let finalSubTotal = AddPrice(props.itemPrice)

    return(
        <div className="row">
            <div className="col-sm-12">
                <p>Subtotal: {finalSubTotal}</p>
                <h6>Tax: 7% </h6>
                <h5>Total: </h5>
            </div>
        </div>
    )
}


function CheckOutData (props){

    let CheckOutDataMapped = props.cart.map(
        (currentCartItem) => {
            return <CheckOut
            itemName = {currentCartItem.title}
            itemPrice = {currentCartItem.price}
            />
        }
    )
    return(
        <div className="row text-center">
            <div className="col-sm-12">
            <h4 className="text-uppercase text-decoration-underline">CheckOut</h4>
            </div>
            {CheckOutDataMapped}
            <Price/>
        </div>
    )

}

export default CheckOutData