import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFavoriteBreedById, removeBreed, toggleFavorite } from "../../slices/cats";
import "./cats.css"
import IconButton from "../../primitives/IconButton";
import { mdiHeart, mdiHeartOutline, mdiThumbDown } from "@mdi/js";

const CatCard = ({ id, name, image, description }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => getIsFavoriteBreedById(state, id));
    return (
        <div className="cat-card">
            <img src={image?.url} alt={name + " photo"} />
            <div>
                <div className={`card-header ${isFavorite && "favorite"}`}>
                    <h2>{name}</h2>
                    <IconButton path={mdiThumbDown}
                        className="remove-button"
                        onClick={() => dispatch(removeBreed(id))}
                        title='Remove'
                    />
                    <IconButton path={isFavorite ? mdiHeart : mdiHeartOutline}
                        className="like-button"
                        onClick={() => dispatch(toggleFavorite(id))}
                        title='Favorite'
                    />
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default CatCard;
