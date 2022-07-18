import React from "react";
import logo from './logo.svg';
import './App.css';

// /**
//   Challenge: Display all users to the browser
// **/

// const users = [
//   { name: "John Doe", id: 1 },
//   { name: "Jane Doe", id: 2 },
//   { name: "Billy Doe", id: 3 }
// ];

// const listUsers = users.map((user) => <li key= {user.id}>{user.name}</li>);

// function App() {
//   return (
//     <div>
//       <h3>User names</h3>
//       <ul>{listUsers}</ul>
//     </div>
//   );
// }

// ReactDOM.render(<App></App>, document.getElementById("root"));

// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}
// /**
//   Challenge: Uncomment this code to complete quiz

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("")}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue}/>
      </div>
    </>
  );
}

ReactDOM.render(document.getElementById("root"));
// // Uncomment this to tackle quiz
// **/

// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [show, setShow] = React.useState(true);
  return (
    
    <>
    
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul></ul>
      <button onClick={() => setShow(!show)}>{show ? "Hide Element Below" : "Show Element Below"}</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
