import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const [qustions, setQuestions] = useState(data);
  const [showInfo, setShowInfo] = useState(false)

  return <main>
    <div className="container">
      <h2 className="Question-Answer" >
        <strong>question and answers about login </strong>
      </h2>
      <section className="info">
        {
          qustions.map((qustions) => <SingleQuestion key={qustions.id} {...qustions} />)
        }
      </section>
    </div>
  </main>
}
export default App;