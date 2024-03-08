import React from "react";
import GroceryData from "./GroceryData";
import CheckOutData from "./CheckOut";


function GroceryDataList(groceries){
    // console.log(groceries)

    
    return(
//overflow-auto row groceryMenu change max height and width to vh vw
        <div className="col-sm-3 erasePadding d-inline-flex">
            <div className="container">
                <div className="row text-center text-nowrap">
                    <div className="col-sm-12 border border-danger">
                        <h6>{groceries.title}</h6>
                        <img className="groceryImage" src={require (`./images/grocery images/${groceries.picture}`)} alt="" />
                        <b><p className="eraseMargin">${groceries.price}</p></b>
                        <p className="eraseMargin d-inline-flex align-items-center">{groceries.type}</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <button onClick={() => groceries.cartAdded(groceries)}>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Body(){

    const [cartData, setCartData] = React.useState([])
        console.log(cartData)
    function AddToCart(cartedItem){

        setCartData(prevCartData => [...prevCartData, {title:cartedItem.title, price:cartedItem.price}])

    }

    let groceryListMapped = GroceryData.map(
        (currentGroceryItem) => {
            return <GroceryDataList 
                title ={currentGroceryItem.title}
                type ={currentGroceryItem.type}
                picture ={currentGroceryItem.filename}
                price ={currentGroceryItem.price}
                cartAdded = {AddToCart}
            />
        }
    )

    return(

        <div className="row">
            <div className="col-sm-12">

                {/* <div className="row ">
                    <div className="col-sm-8">

                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter
                          </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-sm-9 overflow-auto groceryMenu">
                        <div className="row">
                            {groceryListMapped}
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <CheckOutData
                        cart={cartData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body