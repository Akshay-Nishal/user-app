import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from './ErrorModel'
import Wrapper from '../Helpers/Wrapper'


function AddUser(props) {
    const [enteredUserName,setEnteredUserName] = useState('')
    const [enteredUserAge,setEnteredUserAge] = useState('')
    const [error,setError] = useState(false)

    const usernameChange = (event) =>{
        setEnteredUserName(event.target.value)
        // console.log(enteredUserName);
    }
    const userageChange = (event) =>{
        setEnteredUserAge(event.target.value)
        // console.log(enteredUserAge);
    }

    const submitHandeler = (event) =>{
        event.preventDefault()
        if(enteredUserAge.trim.length===0 && enteredUserName.trim().length===0){
            setError(
                {
                    title:'Invalid input',
                    message :'Please enter name and age.'
                }
            )
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (> 0).'
            })
            return;
        }
        // if(+enteredUserAge>1 && enteredUserName.trim().length > 0){
        //     // console.log("Entered User Name",enteredUserName)
        //     // console.log("Entered User Age",enteredUserAge)
        //     let tem = {
        //         name : enteredUserName,
        //         age : enteredUserAge
        //     }
        //     props.updateData(tem)
        //     setEnteredUserAge('')
        //     setEnteredUserName('')
        // }
        // else{
        //     console.log("Enter Correct Values")
        // }
        let tem = {
            name : enteredUserName,
            age : enteredUserAge
        }
        props.updateData(tem)
        setEnteredUserAge('')
        setEnteredUserName('')
    }
    const errorHandler = () =>{
        setError(false)
    }
  return (
    <Wrapper>
        {error &&(
            <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>
        )}
        <Card className={classes.input}>
            <form onSubmit={submitHandeler}>
                <label htmlFor="username">Username</label>
                <input onChange={usernameChange} value={enteredUserName} type="text" name="username" id="username" />
                <label htmlFor="age">Age (Years)</label>
                <input onChange={userageChange} value={enteredUserAge} type="number" id="age" />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </Wrapper>
  )
}

export default AddUser