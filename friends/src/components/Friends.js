import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShowForm(!showForm)
    }

    useEffect(()=>{
        axiosWithAuth()
        .get('/friends')
        .then(res=>{
            setFriends(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[friends])

    return (
        <div>
            {friends.map((friend,index)=>{
                return(
                    <div key={index}>
                        {friend.name}
                    </div>
                )
            })}
            {!showForm ? <button onClick={handleClick}>Add Friend</button> : null}
            {showForm ? <AddFriend setShowForm={setShowForm} /> : null}
        </div>
    )
}
export default Friends;