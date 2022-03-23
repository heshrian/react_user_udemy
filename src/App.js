import React,{useState} from 'react';
import AddUser from './Components/users/AddUser'

const userArray = [
  {id:'1',name:'User1',age:'19'},
  {id:'2',name:'User2',age:'29'},
]

function App() {
  const [users, setUsers] = useState(userArray);
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
