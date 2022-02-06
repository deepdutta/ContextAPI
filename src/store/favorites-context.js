import { createContext , useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite : (favoriteMeetup)=>{},
    removeFavorite : (meetUpId)=>{},
    itemIsFavorite : (meetUpId)=>{}
});

export function FavoritesContextProvider(props) {
    const [ userFavorites , setUserFavorites] = useState([]);
   
    function addFavoriteHandler(favoriteMeetup)
    {
        setUserFavorites((prevUserFavorites) =>{
           return prevUserFavorites.concat(favoriteMeetup);
        });

    }

    function removeFavoriteHandler(meetUpId)
    {
        setUserFavorites((prevUserFavorites) =>{
          return  prevUserFavorites.filter(meetup => meetup.id !== meetUpId)
        });
    }

    function itemIsFavoriteHandler(meetUpId)
    {
        return userFavorites.some(meetup => meetup.id === meetUpId );
    }

    const context = {
        favorites : userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>;
}

export default FavoritesContext;
