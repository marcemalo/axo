import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const Product = () => {
    const [user, setUser] =  useState(null)
    const {id} = useParams();

    useEffect(() => {
         axios(`https://reqres.in/api/users/${id}`)
          .then(response => setUser(response.data))
    }, [])

    console.log(user)
  return (
    <div>
        {
            user && <div>
                <img src={user.data.avatar} alt="" />
                <h2>{user.data.email}</h2>
                <p>{user.data.first_name}</p>
                <p>{user.data.last_name}</p>
            </div>
        }
    </div>
  )
}

export default Product