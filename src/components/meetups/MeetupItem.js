import React , { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
const MeetupItem = (props) => {

    const FavoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.id);
    function toggleFavoritesStatusHandler()
    {
        if(itemIsFavorite)
        {
            FavoriteCtx.removeFavorite(props.id);
        }
        else
        {
            FavoriteCtx.addFavorite({
                id: props.id,
                image:props.image,
                title:props.title,
                address: props.address,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
                    </div>
            </Card>
        </li>
    );

};

export default MeetupItem;