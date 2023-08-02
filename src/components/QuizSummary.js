import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function QuizSummary(props) {
    const [state, setState] = useState({
        score: 0,
        numberOfQuestions: 0,
        numberOfAnsweredQuestions: 0,
        correctAnsewers: 0,
        wrongAnswers: 0,
        usedHints: 0,
        usedFiftyFifty: 0
    });

    const location = useLocation();
    const playerStats = location.state.playerStats;
    console.log(playerStats);

    // Actualizar el estado 'state' con los valores recibidos de 'playerStats'
    useState(() => {
        setState(playerStats);
    }, [playerStats]);
    
    return (
        <div>
            <Helmet>
                <title>
                    Quiz Summary
                </title>
            </Helmet>
            <h1>Hello from Quiz QuizSummary</h1>
            <p>Score: {(state.score / state.numberOfQuestions * 100).toFixed(2) }%</p>
            <p>Number of Questions: {state.numberOfQuestions}</p>
            <p>Number of Answered Questions: {state.numberOfAnsweredQuestions}</p>
            <p>Correct Answers: {state.correctAnswers}</p>
            <p>Wrong Answers: {state.wrongAnswers}</p>
            <p>Used Hints: {state.hintsUsed || 0}</p>
            <p>Used Fifty-Fifty: {state.fiftyFiftyUsed || 0}</p>
        </div>
    );
}

export default QuizSummary;
