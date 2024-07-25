import React from 'react'

const Expense = (object) => {
  console.log('in Expense')
  console.log(object.object1.title)
  
  return (
    <div>
        <p>{object.object1.title}</p>
        <p>{object.object1.amount}</p>
        <p>{object.object1.date}</p>
      
    </div>
  )
}

export default Expense
