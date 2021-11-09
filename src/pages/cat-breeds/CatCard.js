import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFavoriteBreedById, toggleFavorite } from "../../slices/cats";
import "./cats.css"
import IconButton from "../../primitives/IconButton";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";

const CatCard = ({ id, name, image, description }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => getIsFavoriteBreedById(state, id));
    return (
        <div className="cat-card">
            <img src={image?.url} alt={name + " photo"} />
            <div>
                <div className={`card-header ${isFavorite && "favorite"}`}>
                    <h2>{name}</h2>
                    <IconButton path={isFavorite ? mdiHeart : mdiHeartOutline}
                        onClick={() => dispatch(toggleFavorite(id))}
                        title='Edit'
                    />
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default CatCard;
