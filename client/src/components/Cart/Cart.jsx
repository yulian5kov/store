import React from "react";
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

const data = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        img2: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true, 
        oldPrice: 19,
        newPrice: 12,
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        img2: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Long Sleeve Graphic T-shirt",
        desc: "swagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswag",
        price: 19,
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        img2: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Swag",
        desc: "swagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswagswag",
        price: 19,
    },
]

  return <div className="cart">
    <h1>Products in your cart</h1>
    {data.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                    1 x ${item.price}
                </div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
    ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">RESET CART</span>
  </div>;
};

export default Cart;
