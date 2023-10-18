import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Age: age,
      Gender: gender,
      Salary: salary,
    };
    console.log("data", data);
    axios
      .post(
        "https://sheet.best/api/sheets/36e18e18-2ae5-407a-8eee-cf54edb19a3f",
        data
      )
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          setName("");
          setAge("");
          setGender("");
          setSalary("");
          e.target.reset();
        }
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        console.log("Finally block executed.");
      });
  };

  return (
    <>
      <div className="main">
        <div style={{ width: "430px" }}>
          <form className="form" onSubmit={handleSubmit}>
            <label> Name </label>
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <label> Age </label>
            <br />
            <input type="number" onChange={(e) => setAge(e.target.value)} />
            <br />
            <label> Gender </label>
            <br />
            <input type="gender" onChange={(e) => setGender(e.target.value)} />
            <br />
            <label> Salary </label>
            <br />
            <input type="number" onChange={(e) => setSalary(e.target.value)} />
            <br />
            <button> Submit </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
