import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { BiCircleHalf } from 'react-icons/bi';
import { HiOutlineLightBulb} from 'react-icons/hi';

//Here we import the imagas that we will need, 
//at the moment we don't have any since we will capture it
//once we will have the app working 
import img1 from '../../assets/img/img1.PNG';
import img2 from '../../assets/img/img2.PNG';
import img3 from '../../assets/img/img3.PNG';
import img4 from '../../assets/img/img4.PNG';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className='background'>
            <div className='instructions container'>
                <h1>How to Play the Game</h1>
                <p>Ensure you read this guide from start to finish.</p>
                <ul id='main-list' className='browser-default'>
                    <li>The game has a duratino of 15 minutes and ends as soon as your time elapses.</li>
                    <li>Each game consists in 15 questions.</li>
                    <li>
                        Every question contains 4 options.
                        <br/><img src={img1} alt='Quiz App options example'/>
                    </li>
                    <li>
                        Select the option wich best answers the question by clicking (or selecting) it.
                        <br/><img src={img2} alt='Quiz App answer example'/>
                    </li>
                    <li>
                        Each game has 2 lifelines normely.
                        <ul id='sublist'>
                            <li>2 50-50 chances</li>
                            <li>5 Hints</li>
                        </ul>
                    </li>
                    <li>
                        Selecting a 50-50 lifeline by clicking the icon  
                        <BiCircleHalf size='24px' className='lifeline-icon'/>
                        will remove 2 wrong ansewers, leaving the correct answer and one wrong answer.
                    <br/> <img src={img3} alt='Quiz App Fifty example' /> 
                    </li>
                    <li>
                        Using a hint by clicking the icon
                        <HiOutlineLightBulb size='24px' className='lifeline-icon'/> 
                        will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
                        <br/><img src={img4} alt='Quiz App Hint example' />
                    </li>
                    <li>
                        Feel free to quit (or ritere from) the game at any time. In that case your score will be revealed afterwards.
                    </li>
                    <li>
                        The timer starts as soon as the game loads.
                    </li>
                    <li>
                        Let's do this is you think you've got what it takes!
                    </li>
                </ul>
                <div className='bottom-links'>
                <span className='left'><Link to='/'>No, take me back</Link></span>
                <span className='right'><Link to='/play/quiz'>Okay, Let's do this!</Link></span>
                </div>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions