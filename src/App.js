import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="">
      <div>
        <h1 style={{ textAlign: "center" }}>Interview</h1>
      </div>
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <h3 style={{}}>Interview Instructions</h3>
        <div>
          <p>
            Create a Button to open a modal. The modal should have a form with
            the following fields:
          </p>
          <ul>
            <li>First Name</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Address</li>
          </ul>
          <p>
            The form should have a submit button that will send the data to a
            database. The form should also have a cancel button that will close
            the modal.
          </p>
          <p>
            The form should have validation on all fields. The validation should
            be as follows:
          </p>
          <ul>
            <li>First Name and Phone Number are required fields.</li>
            <li>
              First Name and Last Name should only contain letters and spaces.
            </li>
            <li>Phone Number should only contain numbers.</li>
            <li>Email should be a valid email address.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
