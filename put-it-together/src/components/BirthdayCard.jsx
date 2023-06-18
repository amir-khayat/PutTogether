import React, {useState} from 'react'

const BirthdayCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [birthAge, setAge] = useState(age)
    const addAge = () => {
        setAge(birthAge + 1)
    }
  return (
    <div>
        <h1>{firstName} {lastName}</h1>
        <p>Age: {birthAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick = {addAge}>Birthday Button for {firstName} {lastName}</button>
    </div>
  )
}

export default BirthdayCard