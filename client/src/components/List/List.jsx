import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
	const data = [
		{
			id: 1,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2: "https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
            title: "swag",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
		},
		{
			id: 2,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2: "https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
            title: "swag",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
		},
		{
			id: 3,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2: "https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
            title: "swag",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
		},
		{
			id: 4,
			img: "https://img-9gag-fun.9cache.com/photo/aZyoZDV_460s.jpg",
			img2: "https://keepmeme.com/meme/20211103/trap-card-bitch-hold-on.jpg",
            title: "swag",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
		},
	];

	return <div className="list">{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>;
};

export default List;
