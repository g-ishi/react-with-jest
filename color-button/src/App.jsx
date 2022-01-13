import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isButtonDisabled, setButtonDisabled] = useState(false)

  const onCheckboxChange = (e) => {
    setButtonDisabled(e.target.checked)
  }

  return (
    <div>
      <button
        disabled={isButtonDisabled}
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='chk'>button disabled</label>
      <input
        id='chk'
        type='checkbox'
        name='chk'
        value='button disabled'
        defaultChecked={isButtonDisabled}
        onChange={onCheckboxChange}
         />
    </div>
  );
}

export default App;
