import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
		"https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
	];

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img
						src={images[0]}
						alt=""
						onClick={(e) => setSelectedImg(0)}
					/>
					<img
						src={images[1]}
						alt=""
						onClick={(e) => setSelectedImg(1)}
					/>
				</div>
				<div className="mainImg">
					<img
						src={images[selectedImg]}
						alt=""
					/>
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$199</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea
				</p>
				<div className="quantity">
					<button onClick={e=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
					{quantity}
					<button onClick={e=>setQuantity(prev=>prev+1)}>+</button>
				</div>
				<button className="add">
					<AddShoppingCartIcon/> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon/> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon/> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product type: T-shirt</span>
					<span>Tag: T-shirt, Women, Top</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
