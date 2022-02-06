import React from 'react';
import { useNavigate  } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupsPage = () =>{
    const navigate  = useNavigate();
    const AddMeetupHandler = (meetupData) =>
    {
        fetch('https://react-2022-80d26-default-rtdb.firebaseio.com/meetups.json',
         {
             method: 'POST',
             body:JSON.stringify(meetupData),
             headers :{
                 'Content-Type':'application/json'
             }
         }).then(()=>{
            navigate('/');
         });
    }
    return(
       <section>
           <h1>Add New Meetup</h1>
           <NewMeetupForm onAddMeetUp ={AddMeetupHandler}/>
       </section>
    );
};

export default NewMeetupsPage;