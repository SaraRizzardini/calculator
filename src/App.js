import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useRef, useState } from "react";
function App() {
	 const [currentDisplay, setCurrentDisplay] = useState("0");
	const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  const displayAdd=(key)=>{
	  if(currentDisplay==0){
	  setCurrentDisplay(key);   
  }else{
	  currentDisplay.concat(key);
  }
  };
  return (
     <div className="App">
      <center>
        <div className="calculator d-flex flex-column border border-5">
          <div className="p-2" style={{ width: "50%", height: "auto" }}>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {["123", "456", "789"].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th scope="row"></th>
                    {row.split("").map((key) => (
                      <td key={key}>
                        <button
                          type="button"
                          id={numbers[key]}
                          className="number btn btn-secondary btn-lg"
                          onClick={() => displayAdd(key)}
                        >
                          {key}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
		  <div className="p-2" style={{width:"50%", height:'auto', backgroundColor:"rgba(0,0,0,0.9)"}}>
		  <div className="display rounded-pill" style={{top:"50%", height:'auto'}}>{currentDisplay}</div>
</div>

        </div>
      </center>
    </div>
  );
}

export default App;
