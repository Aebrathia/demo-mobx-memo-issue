import React from 'react';
import { observer } from 'mobx-react-lite'
import './App.css';
import { IUser } from './models/user';

interface IAppProps {
  user: IUser
}

const App = observer(function AppObserved({ user }: IAppProps) {
  return (
    <div className="App">
      <p>{user.fullName}</p>
      <p>{user.fullNameAndTitle}</p>
      <p>{user.formalGreetings}</p>
    </div>
  );
})

export default App;
