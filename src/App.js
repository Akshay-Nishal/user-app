import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList,setUsersList] = useState(
    [
      {name:'Akshay',
      age:24}
    ]
    )
    const updateUsers = (newUser) =>{
      console.log(newUser)
      // let x = usersList
      // x.append(newUser)
      // setUsersList(prevUsers=>[...prevUsers,newUser])
      setUsersList([...usersList,newUser])
    }
  return (
    <React.Fragment>
      <AddUser updateData={updateUsers}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
