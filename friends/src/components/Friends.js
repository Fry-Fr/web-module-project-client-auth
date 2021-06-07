import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res=>{
            setFriends(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            {friends.map((friend,index)=>{
                return(
                    <div key={index}>
                        {friend.name}
                    </div>
                )
            })}
        </div>
    )
}
export default Friends;