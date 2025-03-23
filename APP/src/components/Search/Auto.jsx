import React, { use, useEffect, useState } from 'react'

function Auto() {

 const [user, setUser] = useState([])


 useEffect(() => {
  fetch("https://dummyjson.com/users")
  .then(response =>  response.json())
  .then(res => setUser(res))
 }, [])

 console.log(user)

  return (
    <div>
 
     {user.users.map((user,index) =>
     <p key={index}>{user.firstName}</p>
     )}
    </div>
  )
}

export default Auto