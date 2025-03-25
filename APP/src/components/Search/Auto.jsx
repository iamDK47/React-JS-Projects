import React, { use, useEffect, useState } from 'react'

function Auto() {

  const [user, setUser] = useState({})
  const [names, setNames] = useState([])
  const [word, setWord] = useState('')

  useEffect(() => {
    const func = async () => {
      try {
        const call = await fetch('https://dummyjson.com/users');
        if (!call.ok) throw new ("ERROR", call.status);
        const res = await call.json();
        setUser(res);
      } catch (err) {
        console.log('error', err);
      }
    }
    func()
    console.log('API CALLED')
  }, [])

  // console.log(user)

  const algo = (e) => {
    const newWord = e.target.value

    if (newWord === '') {
      setNames([])
      return
    }

    setNames(() =>
      user.users?.filter((obj) => obj.firstName.toLowerCase().startsWith(newWord.toLowerCase()))
      //  user.users?.filter((obj) => obj.firstName.toLowerCase().charAt(0) === newWord)
    )
  }



  console.log('comp rendred')

  return (
    <div>
      <input
        onChange={algo}
        placeholder='Type Name'
      />
      <ul>
        {names.map((obj, index) =>
          <li key={index}>
            {obj.firstName}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Auto