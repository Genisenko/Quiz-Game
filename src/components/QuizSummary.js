import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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

    // Actualizar el estado 'state' con los valores recibidos de 'playerStats'
    useState(() => {
        setState(playerStats);
    }, [playerStats]);

    // Calcular el porcentaje de aciertos
    const successRate = (state.score / state.numberOfQuestions * 100).toFixed(2);

    let resultMessage = '';
    if (successRate <= 30) {
        resultMessage = 'You need more practice!';
    } else if (successRate <= 50) {
        resultMessage = 'Better luck next time';
    } else if (successRate <= 70) {
        resultMessage = 'You can do better!';
    } else if (successRate <= 84) {
        resultMessage = 'You did great!';
    } else {
        resultMessage = "You're an absolute genius!";
    }

    return (
        <div>
            <Helmet>
                <title>
                    Quiz Summary
                </title>
            </Helmet>
                <div className='summary-pg'>
                    <h1 className='end-msg'>Congratulations you made it!</h1>
                    <h3 className='result-msg'>{resultMessage}</h3>
                    <h2 className='score-msg'>Your score: {successRate}%</h2>
                    <table className='summary-table'>
                        <tbody>
                            <tr>
                                <td>Number of Questions:</td>
                                <td>{state.numberOfQuestions}</td>
                            </tr>
                            <tr>
                                <td>Number of Answered Questions:</td>
                                <td>{state.numberOfAnsweredQuestions}</td>
                            </tr>
                            <tr>
                                <td>Correct Answers:</td>
                                <td>{state.correctAnswers}</td>
                            </tr>
                            <tr>
                                <td>Wrong Answers:</td>
                                <td>{state.wrongAnswers}</td>
                            </tr>
                            <tr>
                                <td>Used Hints:</td>
                                <td>{state.hintsUsed || 0}</td>
                            </tr>
                            <tr>
                                <td>Used Fifty-Fifty:</td>
                                <td>{state.fiftyFiftyUsed || 0}</td>
                            </tr>
                        </tbody>
                    </table>
                    <span className='summary-span'>
                        <div className='button-container-summary'>
                            <Link id='play-button' className='buttons' to="/play/quiz">Play Again</Link>
                            <Link id='home-button' className='buttons' to="/">Back to home</Link>
                        </div>
                    </span>
                </div>
        </div>
    );
}

export default QuizSummary;