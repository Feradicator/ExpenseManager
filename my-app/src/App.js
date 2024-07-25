import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expense from './components/Expense';
import ExpensePage from './components/ExpensePage';

function App() {
  return (
    <div className="App">
     <div>
      Expense Manager
      <ExpensePage/>
     </div>
    </div>
  );
}

export default App;
