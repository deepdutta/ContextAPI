import React , { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

console.log(React.version);
const FavoritesPage = () =>{
    const favoritesCtx = useContext(FavoritesContext);
    let content ='';
    if(favoritesCtx.totalFavorites === 0)
    {
         content = <p>No Favorite Item Added Yet</p>
    }
    else
    {
         content = <MeetupList  meetups ={favoritesCtx.favorites} />;
    }
    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
};

export default FavoritesPage;