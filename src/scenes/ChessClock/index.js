import React, {useState} from 'react';
import '../style.scss';

function ChessClock() {

    const [playerA, setPlayerA] = useState(10);
    const [playerB, setPlayerB] = useState(10);

    const [decrementPlayerA, setDecrementPlayerA] = useState(0);
    const [decrementPlayerB, setDecrementPlayerB] = useState(0);

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
                        <span className="icon icon-gear" />
                    </li>
                    <li>
                        <span className="icon icon-play" />
                    </li>
                    <li>
                        <span className="icon icon-reload" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ChessClock;
