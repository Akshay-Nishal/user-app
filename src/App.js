import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList,setUsersList] = useState([
    {
      id:Math.random(),
      college:"CGC",
      name:'Akshay',
      age:24}
    ])
    const updateUsers = (newUser) =>{
      console.log(newUser)
      console.log(newUser.college)
      setUsersList(prevUsers=>[...prevUsers,newUser])
    }
  return (
    <React.Fragment>
      <AddUser updateData={updateUsers}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
