import React from 'react'
import Card from '../UI/Card'
import classes from './ErrorModal.module.css'
import Button from '../UI/Button'

function ErrorModel(props) {
  return (
    <div>
    <div className={classes.backdrop}/>
    <Card className={classes.modal} >
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onChange} >Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModel
