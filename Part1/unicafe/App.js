import { useState } from "react";

import Statistics from "./Components/Statistics";
import Button from "./Components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const results = [good, neutral, bad];

  const goodClickHandler = () => {
    setGood(good + 1);
  };
  const neutralClickHandler = () => {
    setNeutral(neutral + 1);
  };
  const badClickHandler = () => {
    setBad(bad + 1);
  };

  const totalResults = results.reduce((prev, cur) => prev + cur, 0);

  const average = (good - bad) / totalResults;

  const positiveFeedback = (good / totalResults) * 100;

  return (
    <div>
      <h1>Please Give Your Feedback</h1>
      <Button
        onClickGood={goodClickHandler}
        onClickNeutral={neutralClickHandler}
        onClickBad={badClickHandler}
      ></Button>
      <Statistics
        results={results}
        totalResults={totalResults}
        average={average}
        positive={positiveFeedback}
      ></Statistics>
    </div>
  );
};

export default App;
