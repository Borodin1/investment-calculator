//styles
import styles from "./forms.module.css";

//Components
import { useState } from "react";
import { Button } from "../elements/button";
import { Input } from "../elements/input";

const initialState = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export const Form = ({ calculateHandler }) => {
  const [stateValue, setStateValue] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler(stateValue);
  };

  const resetHandler = () => {
    setStateValue(initialState);
  };

  const inputChangeHandler = (input, value) => {
    setStateValue((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      onReset={resetHandler}
      className={styles.form}>
      <div className={styles["input-group"]}>
        <Input
          className="current-savings"
          textLabel="Current Savings ($)"
          type="number"
          value={stateValue["current-savings"]}
          changeHandler={inputChangeHandler}
        />
        <Input
          className="yearly-contribution"
          textLabel="Yearly Savings ($)"
          type="number"
          value={stateValue["yearly-contribution"]}
          changeHandler={inputChangeHandler}
        />
      </div>
      <div className={styles["input-group"]}>
        <Input
          className="expected-return"
          textLabel="Expected Interest (%, per year)"
          type="number"
          value={stateValue["expected-return"]}
          changeHandler={inputChangeHandler}
        />

        <Input
          className="duration"
          textLabel="Investment Duration (years)"
          type="number"
          value={stateValue["duration"]}
          changeHandler={inputChangeHandler}
        />
      </div>
      <p className={styles.actions}>
        <Button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}>
          Reset
        </Button>
        <Button onClick={submitHandler} type="submit" className={styles.button}>
          Calculate
        </Button>
      </p>
    </form>
  );
};
