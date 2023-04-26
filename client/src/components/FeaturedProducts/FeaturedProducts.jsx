import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
	const data = [
		{
			id: 1,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2:"https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
			title: "Swag",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2:"https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
			title: "Swag",
			isNew: false,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2:"https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
			title: "Swag",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 4,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2:"https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
			title: "Swag",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
	];

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
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
		</div>
	);
};

export default FeaturedProducts;
