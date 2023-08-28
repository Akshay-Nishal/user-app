import React, { useRef, useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from './ErrorModel'
import Wrapper from '../Helpers/Wrapper'


function AddUser(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const collegeInputRef = useRef()
    // const [enteredUserName,setEnteredUserName] = useState('')
    // const [enteredUserAge,setEnteredUserAge] = useState('')
    const [error,setError] = useState(false)

    // const usernameChange = (event) =>{
    //     setEnteredUserName(event.target.value)
    //     // console.log(enteredUserName);
    // }
    // const userageChange = (event) =>{
    //     setEnteredUserAge(event.target.value)
    //     // console.log(enteredUserAge);
    // }

    const submitHandeler = (event) =>{
        event.preventDefault()
        console.log(collegeInputRef.current.value)
        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        const enteredUserCollege = collegeInputRef.current.value
        if(enteredUserAge.trim.length===0 && enteredUserName.trim().length===0 && enteredUserCollege.trim().length===0){
            setError(
                {
                    title:'Invalid input',
                    message :'Please enter valid college name, username and age'
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
        let tem = {
            id : Math.random(),
            name : enteredUserName,
            age : enteredUserAge,
            college : enteredUserCollege
        }
        props.updateData(tem)
        nameInputRef.current.value=''
        ageInputRef.current.value=''
        collegeInputRef.current.value=''
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
                <label htmlFor="college">College Name</label>
                <input 
                    id="college"
                    type="text" 
                    // value={enteredUserName} 
                    // onChange={usernameChange} 
                    ref={collegeInputRef}
                /> 
                <label htmlFor="username">Student Name</label>
                <input 
                    id="username"
                    type="text" 
                    // value={enteredUserName} 
                    // onChange={usernameChange} 
                    ref={nameInputRef}
                /> 
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    // value={enteredUserAge} 
                    // onChange={userageChange} 
                    ref={ageInputRef}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </Wrapper>
  )
}

export default AddUser