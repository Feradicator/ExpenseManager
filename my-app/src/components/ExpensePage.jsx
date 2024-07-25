import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const ExpensePage = () => {
    const [expense,setExpense]=useState({});
    const lst=[{'title':'hotel','amount':123,'date':12/12/12}]
    const [list,setList]=useState([]);
    const expenseHandler=(object)=>
    {
        setExpense(object);
        setList([...list,object])
        console.log(object.title)
    }
  return (
    <div>
        <ExpenseForm setExpenseHanlder={expenseHandler}/>
        {
          list.map((ele)=>(<Expense  object1={ele}/>))
        }
       

      
    </div>
  )
}

export default ExpensePage
