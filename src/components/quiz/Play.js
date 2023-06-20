import React, { Component, Fragment} from "react";
import { Helmet } from "react-helmet";

import { BiCircleHalf } from 'react-icons/bi';
import { HiOutlineLightBulb} from 'react-icons/hi';
import {AiOutlineClockCircle} from 'react-icons/ai'
class Play extends Component {
    // constructor (props) {
    //     super(props);
        
    // }

    increaseCount = () => {
        this.setState({
            counter: 5
        });
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <h2>Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p>
                            <span><BiCircleHalf size='24px' className='lifeline-icon'/></span><span className="lifeline">2</span>
                        </p>
                        <p>
                            <span><HiOutlineLightBulb size='24px' className='bulb-icon'/></span><span className="lifeline">5</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="left">1 of 15</span>
                            <span className="right">2:15</span><span><AiOutlineClockCircle size='24px' className='clock-icon'/></span>
                        </p>
                    </div>
                    <h5>The work made by a force is maximum and negative when:</h5>
                    <div className="options-container">
                        <p className="option">Force and displacement are parallel and opposite in direction</p>
                        <p className="option">Force and displacement are parallel and in the same direction</p>
                    </div>
                    <div className="options-container">
                        <p className="option">Force and displacement are perpendicular</p>
                        <p className="option">Force and displacement form any angle</p>
                    
                    </div>

                    <div className="button-container">
                    <button>Previus</button>
                    <button>Next </button>
                    <button>Quit </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Play;