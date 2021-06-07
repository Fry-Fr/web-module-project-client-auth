import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
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
            <AddFriend />
        </div>
    )
}
export default Friends;