import "./Card.scss";
import { Link } from "react-router-dom";

const REACT_APP_API_TOKEN =
	"175f16c305184e0a8820acb7a06f6cc38df05124d697d0d416d10fc8b256e042139ce89a359aae9c32c847cd29c03fdc228a70a177aa2f9d02c1ef5c7e57ca9a64408b49b17f0c773d1a979a2b5c756bfc589cb02a8abe38f4dc992ee044c342627ce8e96e7edf60645e79c6729d568079c13b62ba777275461686688c63f989";
const REACT_APP_API_URL = "http://localhost:1337/api";
const REACT_APP_UPLOAD_URL = "http://localhost:1337";

const Card = ({ item }) => {
	return (
		<Link
			className="link"
			to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item?.attributes.isNew && <span>New Season</span>}
					<img
						src={REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url}
						alt=""
						className="mainImg"
					/>
					<img
						src={REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url}
						alt=""
						className="secondImg"
					/>
				</div>
				<h2>{item?.attributes.title}</h2>
				<div className="prices">
					<h3>${item.oldPrice || item?.attributes.price+20}</h3>
					<h3>${item?.attributes.price}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Card;
