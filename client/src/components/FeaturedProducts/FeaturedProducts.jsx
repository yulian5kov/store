import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios"

const REACT_APP_API_TOKEN =
	"175f16c305184e0a8820acb7a06f6cc38df05124d697d0d416d10fc8b256e042139ce89a359aae9c32c847cd29c03fdc228a70a177aa2f9d02c1ef5c7e57ca9a64408b49b17f0c773d1a979a2b5c756bfc589cb02a8abe38f4dc992ee044c342627ce8e96e7edf60645e79c6729d568079c13b62ba777275461686688c63f989";
const REACT_APP_API_URL = "http://localhost:1337/api";
const REACT_APP_UPLOAD_URL = "http://localhost:1337";

const FeaturedProducts = ({ type }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(REACT_APP_API_URL+"/products?populate=*", {
					headers:{
						Authorization: "Bearer " + REACT_APP_API_TOKEN,
					},
				});
				setData(res.data.data)
			} catch (err) {
				console.log(err);
			}
		};
		fetchData()
	}, []);

	console.log(data)

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} products</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card
						item={item}
						key={item.id}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
