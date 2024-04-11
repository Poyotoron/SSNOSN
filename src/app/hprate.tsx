import React, { use, useEffect } from "react";

export default function HPRate() {
    const [leaderHP, setLeaderHP] = React.useState(1);
    const [friendHP, setFriendHP] = React.useState(1);
    const [leaderReduce, setLeaderReduce] = React.useState([0, 0]);
    const [friendReduce, setFriendReduce] = React.useState([0, 0]);
    const [totalAllHPRate, setTotalAllHPRate] = React.useState(1);
    const [totalHPRate, setTotalHPRate] = React.useState(1);
    const [totalReduceRate, setTotalReduceRate] = React.useState(0);

    function numberRound(num: number, digit: number) {
        return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    function calcTotalAllHPRate() {
        calcTotalHPRate();
        calcTotalReduceRate();
        setTotalAllHPRate(numberRound(totalHPRate * (100 / (100 - totalReduceRate)), 4));
    }

    function calcTotalHPRate() {
        setTotalHPRate(leaderHP * friendHP);
    }

    function calcTotalReduceRate() {
        setTotalReduceRate(100 - (1 - leaderReduce[0] / 100) * (1 - leaderReduce[1] / 100) * (1 - friendReduce[0] / 100) * (1 - friendReduce[1] / 100) * 100);
    }

    useEffect(() => {
        calcTotalAllHPRate();
    });

    return (
        <div>
            <h3>リーダースキル</h3>
            <h4>リーダー</h4>
            <p>HP倍率</p>
            <input type="number" value={leaderHP} onChange={(e) => setLeaderHP(Number(e.target.value))} />
            <p>ダメージ軽減率1</p>
            <input value={leaderReduce[0]} onChange={(e) => setLeaderReduce([Number(e.target.value), leaderReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input value={leaderReduce[1]} onChange={(e) => setLeaderReduce([leaderReduce[0], Number(e.target.value)])} />%
            <h4>フレンド</h4>
            <p>HP倍率</p>
            <input type="number" value={friendHP} onChange={(e) => setFriendHP(Number(e.target.value))} />
            <p>ダメージ軽減率1</p>
            <input value={friendReduce[0]} onChange={(e) => setFriendReduce([Number(e.target.value), friendReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input value={friendReduce[1]} onChange={(e) => setFriendReduce([friendReduce[0], Number(e.target.value)])} />%
            <h3>合計</h3>
            <h4>実質HP倍率</h4>
            <p>{totalAllHPRate}</p>
            <h4>HP倍率</h4>
            <p>{totalHPRate}</p>
            <h4>軽減率</h4>
            <p>{totalReduceRate}%</p>
        </div>
    );
}