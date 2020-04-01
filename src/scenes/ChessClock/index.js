import React, {useState} from 'react';
import '../style.scss';


function ChessClock() {


    return (
        <section className="chess-clock">
            <div className="player-1">
                <div className="display-center">
                    <span className="timer">00:00:00</span>
                </div>
            </div>
            <div className="player-2">
                <div className="display-center">
                    <span className="timer">00:00:00</span>
                </div>
            </div>
            <div className="navigation display-center">
                <ul>
                    <li>
                        <span className="icon icon-gear"></span>
                    </li>
                    <li>
                        {/* <span className="icon icon-pause"></span> */}
                        <span className="icon icon-play"></span>
                    </li>
                    <li>
                        <span className="icon icon-reload"></span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ChessClock;
