import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expense from './components/Expense';

function App() {
  return (
    <div className="App">
     <div>
      Expense Manager
      <ExpenseForm/>
      <Expense/>
     </div>
    </div>
  );
}

export default App;
