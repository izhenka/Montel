import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPageTitle } from "../../utils/DOMUtils";
import { getFavoriteBreeds } from "../../slices/cats";
import Button from "../../primitives/Button";
import "./cat-picture.css"

const CatPicturePage = () => {
    setPageTitle("Picture")
    const [data, setData] = useState(undefined);
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const favorites = useSelector(getFavoriteBreeds);
    const apiRoute = "https://api.thecatapi.com/v1/images/search";

    const fetchData = async () => {
        const randomFavorite = getRandomElement(favorites);

        try {
            const result = await axios.get(onlyFavorites ? `${apiRoute}?breed_ids=${randomFavorite}` : apiRoute);
            result.data.length && setData(result.data[0]);
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }
    useEffect(() => { fetchData() }, [])


    return (
        <div className="cat-picture-page">
            <h1>Cat picture</h1>
            {data && <img src={data.url} alt="Random cat" className="big-img" />}
            <div>
                <Button
                    primary
                    onClick={fetchData}
                >
                    Load new
                </Button>
                {favorites.length > 0 &&
                    <div className="checkbox">
                        <input id="checkbox" type="checkbox" checked={onlyFavorites} onChange={() => setOnlyFavorites(!onlyFavorites)} />
                        <label htmlFor="checkbox">
                            Only my favorites
                        </label>
                    </div>
                }
            </div>
        </div>
    )
}

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

export default CatPicturePage;