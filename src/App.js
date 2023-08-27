//assets
import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";

//components
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Form } from "./components/forms";

function App() {
  const [form, setForm] = useState(null);

  const calculateHandler = (userInput) => {
    setForm(userInput);
  };
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...
  const yearlyData = []; // per-year results

  if (form) {
    let currentSavings = +form["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +form["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +form["expected-return"] / 100;
    const duration = +form["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  }

  return (
    <div>
      <Header logo={logo} />

      <Form calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!form && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {form && (
        <Table data={yearlyData} initialInvestment={form["current-savings"]} />
      )}
    </div>
  );
}

export default App;
