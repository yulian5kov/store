import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

// const REACT_APP_API_TOKEN =
// 	"175f16c305184e0a8820acb7a06f6cc38df05124d697d0d416d10fc8b256e042139ce89a359aae9c32c847cd29c03fdc228a70a177aa2f9d02c1ef5c7e57ca9a64408b49b17f0c773d1a979a2b5c756bfc589cb02a8abe38f4dc992ee044c342627ce8e96e7edf60645e79c6729d568079c13b62ba777275461686688c63f989";
// const REACT_APP_API_URL = "http://localhost:1337/api";
// const REACT_APP_UPLOAD_URL = "http://localhost:1337";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
                setLoading(true)
				const res = await makeRequest.get(url);
				setData(res.data.data);
			} catch (err) {
                setError(true)
            }
            setLoading(false)
		};
		fetchData();
	}, [url]);

    return {data,loading,error}
};

export default useFetch
