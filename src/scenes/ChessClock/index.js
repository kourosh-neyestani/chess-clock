import React, {useState} from 'react';
import '../style.scss';

function ChessClock() {

    const [times, setTimes] = useState([
        {
            id: 1,
            title: "Standard 10",
            time: 600,
        },
        {
            id: 2,
            title: "Standard 5",
            time: 300,
        },
        {
            id: 3,
            title: "Standard 3",
            time: 180,
        },

        {
            id: 4,
            title: "Standard 1",
            time: 60,
        },

        {
            id: 4,
            title: "Test",
            time: 3,
            selected: true
        },

    ]);

    const getTime = () => times.find(item => item.selected === true).time;

    const [playing, setPlaying] = useState(null);

    const [playerA, setPlayerA] = useState(getTime());
    const [playerB, setPlayerB] = useState(getTime());

    const [decrementPlayerA, setDecrementPlayerA] = useState(0);
    const [decrementPlayerB, setDecrementPlayerB] = useState(0);

    const getSecond = (id) => {
        let player = (id === "A") ? playerA : playerB;
        return ('0' + parseInt(player % 60)).slice(-2);
    }

    const getMinute = (id) => {

        let player = (id === "A") ? playerA : playerB;
        return ('0' + Math.floor(player / 60)).slice(-2);
    }

    const startTimer = (id) => {

        if (id === "A") {

            setPlaying("A");

            setDecrementPlayerB(
                setInterval(() => {
                    setPlayerB(playerB => playerB - 0.01);
                }, 10)
            )

            clearInterval(decrementPlayerA);

        } else if (id === "B") {

            setPlaying('B');

            setDecrementPlayerA(
                setInterval(() => {
                    setPlayerA(playerA => playerA - 0.01);
                }, 10)
            )

            clearInterval(decrementPlayerB);

        }

    };

    const stopTimer = () => {
        setPlaying(null);
        clearInterval(decrementPlayerA);
        clearInterval(decrementPlayerB);
    }


    const resetTimer = () => {


        stopTimer();

        setPlayerA(getTime())
        setPlayerB(getTime())
    }

    return (
        <section className="chess-clock">
            <div className={["player-1", playing === "B" && "active"].join(" ")} onClick={() => startTimer("A")}>
                <div className="display-center">
                    <span className="timer">{getMinute("A")}:{getSecond("A")}</span>
                </div>
            </div>
            <div className={["player-2", playing === "A" && "active"].join(" ")} onClick={() => startTimer("B")}>
                <div className="display-center">
                    <span className="timer">{getMinute("B")}:{getSecond("B")}</span>
                </div>
            </div>
            <div className="navigation display-center">
                <ul>
                    <li>
                        <span className="icon icon-gear"/>
                    </li>
                    {
                        (playing ? (<li><span className="icon icon-pause" onClick={() => stopTimer()}/></li>) : null)
                    }
                    <li>
                        <span className="icon icon-reload" onClick={() => resetTimer()}/>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ChessClock;
