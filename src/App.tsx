import { observer, inject } from 'mobx-react';
import { Component } from 'react';
import { compose } from 'recompose';
import { IUser } from './User';

interface IMyComponentProps {
  user: IUser
}

class MyComponent extends Component<IMyComponentProps, {}> {
  static myStaticProperty = 'myStaticProperty';
  static myStaticFn = () => 'myStaticFn';

  render() {
    return (
      <div>{this.props.user.fullName}</div>
    )
  }
}

const MyComponentComposed = compose<IMyComponentProps, {}>(inject('user'), observer)(MyComponent)

function App() {
  return (
    <div className="App">
      {/* @ts-ignore */}
      {MyComponentComposed.myStaticProperty}<br />
      {/* @ts-ignore */}
      {MyComponentComposed.myStaticFn()}
      <MyComponentComposed />
    </div>
  );
}


export default App;
