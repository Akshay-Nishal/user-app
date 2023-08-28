import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'


function UsersList(props) {
  return (
    <Card className={classes.users} >
      <ul>
          {props.users.map((user)=>{
            return(
              <li key={user.id}>
                College : {user.college}
                <br />
                Name : {user.name}
                <br />
                Age : {user.age}</li>
              )
            })}
      </ul>
    </Card>
  )
}

export default UsersList 

