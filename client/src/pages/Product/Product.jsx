import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

// const REACT_APP_API_TOKEN = "175f16c305184e0a8820acb7a06f6cc38df05124d697d0d416d10fc8b256e042139ce89a359aae9c32c847cd29c03fdc228a70a177aa2f9d02c1ef5c7e57ca9a64408b49b17f0c773d1a979a2b5c756bfc589cb02a8abe38f4dc992ee044c342627ce8e96e7edf60645e79c6729d568079c13b62ba777275461686688c63f989"
// const REACT_APP_API_URL = "http://localhost:1337/api"
const REACT_APP_UPLOAD_URL = "http://localhost:1337"

const Product = () => {
	const id = useParams().id;
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch()
	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className="product">
			{loading ? (
				"loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									REACT_APP_UPLOAD_URL +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img")}
							/>
							<img
								src={
									REACT_APP_UPLOAD_URL +
									data?.attributes?.img2?.data?.attributes
										?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img2")}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									REACT_APP_UPLOAD_URL +
									data?.attributes[selectedImg]?.data
										?.attributes?.url
								}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h1>{data?.attributes?.title}</h1>
						<span className="price">
							${data?.attributes?.price}
						</span>
						<p>{data?.attributes?.desc}</p>
						<div className="quantity">
							<button
								onClick={() =>
									setQuantity((prev) =>
										prev === 1 ? 1 : prev - 1
									)
								}>
								-
							</button>
							{quantity}
							<button
								onClick={() => setQuantity((prev) => prev + 1)}>
								+
							</button>
						</div>
						<button className="add" onClick={()=>dispatch(addToCart({
							id:data.id,
							title:data.attributes.title,
							desc:data.attributes.desc,
							price:data.attributes.price,
							img:data.attributes.img.data.attributes.url,
							quantity
						}))}>
							<AddShoppingCartIcon /> ADD TO CART
						</button>
						<div className="links">
							<div className="item">
								<FavoriteBorderIcon /> ADD TO WISH LIST
							</div>
							<div className="item">
								<BalanceIcon /> ADD TO COMPARE
							</div>
						</div>
						<div className="info">
							<span>Vendor: Polo</span>
							<span>Product Type: T-Shirt</span>
							<span>Tag: T-Shirt, Women, Top</span>
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
				</>
			)}
		</div>
	);
};

export default Product;
