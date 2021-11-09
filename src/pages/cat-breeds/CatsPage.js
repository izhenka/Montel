import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../utils/DOMUtils";
import { getBreeds, setBreeds } from "../../slices/cats";
import "./cats.css"
import CatCard from "./CatCard";

const CatsPage = () => {
    setPageTitle("Cats")
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("https://api.thecatapi.com/v1/breeds");
                dispatch(setBreeds(result.data));
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        }
        fetchData();
    }, [dispatch])

    const breeds = useSelector(getBreeds);

    return (
        <div>
            <h1>Cat breeds</h1>
            <div>
                {breeds && breeds.map(breed => <CatCard key={breed.id} {...breed} />)}
            </div>
        </div>
    )
}
export default CatsPage;