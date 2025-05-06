import Header from "./components/Header.jsx"
import Input from "./components/Input.jsx"
import Results from "./components/Result.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 9813,
    annualInvestment: 1200,
    expectedReturn: 3.75,
    duration: 10, 
});

const handleChange = (InputIdentifier, newValue) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            [InputIdentifier]: +newValue,
        };
    });
};
const inputIsValid = userInput.duration>0;
  return (
    <div>
        <Header/>
        <Input onChange={handleChange} userInput={userInput}/>
        {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
        {inputIsValid && <Results input={userInput}/>}
    </div>
  )
}

export default App
