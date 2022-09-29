import React from 'react';
import './Question.css'
const Question = () => {
    return (

        <div>
            <h2>Few Questions</h2>
            <div className='question'>
                <div >
                    <h2>How does ReactJS works?</h2>
                    <p><strong>Answer :</strong> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It is possible to have as many components as necessary without cluttering your code.</p>
                </div>
                <div>
                    <h2>Write down the difference between State and Props.</h2>
                    <p><strong>Answer :</strong> In props,The Data is passed from one component to another.In state,The Data is passed within the component only.Props are Immutable whereas It is Mutable.Props can be used with state and functional components.On the other hand, State can be used only with the state components/class component (Before 16.0).</p>
                </div>
                <div>
                    <h2>What is the use of useEffect besides API data load?</h2>
                    <p><strong>Answer :</strong>useEffect can be used in i. Validating input field every time the input changes, ii. Live filtering an array 'on the fly' by typing letters into an input element, iii. Trigger animation when array value get changes, v. Update paragraph list on fetched API data update and vi. Updating fetched API data to get BTC updated price.</p>
                </div>
            </div>
        </div>

    );
};

export default Question;