import React, { useState } from 'react'

const ExpenseForm = () => {
    const [inputTitle,setInputTitle]=useState('');
    const [inputAmount,setInputAmount]=useState('');
    const [inputDate,setInputDate]=useState('');
    const titleChangeHandler=(event)=>
    {
        setInputTitle(event.target.value)
        console.log(inputTitle)

    }

    const amountChangeHandler=(event)=>
        {
            setInputAmount(event.target.value)
            console.log(inputAmount)
    
        }
    const dateChangeHandler=(event)=>
            {
                setInputDate(event.target.value)
                console.log(inputDate)
        
            }
    const onSubmitHandler=(event)=>
    {
        event.preventDefault();
        const json={
            'title':inputTitle,
            'amount':inputAmount,
            'date':inputDate
        }
        setInputAmount('');
        setInputDate('')
        setInputTitle('')
        console.log(json)
    }
  return (

    <div>
        <form onSubmit={onSubmitHandler}>
            Title : <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
            Amount: <input type="number" value={inputAmount} onChange={amountChangeHandler}/>
            Date: <input type="date" value={inputDate} onChange={dateChangeHandler} />
            <button type="submit">Submit</button>

        </form>
      
    </div>
  )
}

export default ExpenseForm
