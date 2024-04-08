import React, { use, useEffect } from "react";

export default function HPRate() {
    const [LeaderHP, setLeaderHP] = React.useState(1);
    const [FriendHP, setFriendHP] = React.useState(1);
    const [LeaderReduce, setLeaderReduce] = React.useState([0, 0]);
    const [FriendReduce, setFriendReduce] = React.useState([0, 0]);
    const [TotalAllHPRate, setTotalAllHPRate] = React.useState(1);
    const [TotalHPRate, setTotalHPRate] = React.useState(1);
    const [TotalReduceRate, setTotalReduceRate] = React.useState(0);

    function numberRound(num: number, digit: number) {
        return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    function calcTotalAllHPRate() {
        calcTotalHPRate();
        calcTotalReduceRate();
        setTotalAllHPRate(numberRound(TotalHPRate * (100 / (100 - TotalReduceRate)), 4));
    }

    function calcTotalHPRate() {
        setTotalHPRate(LeaderHP * FriendHP);
    }

    function calcTotalReduceRate() {
        setTotalReduceRate(100 - (1 - LeaderReduce[0] / 100) * (1 - LeaderReduce[1] / 100) * (1 - FriendReduce[0] / 100) * (1 - FriendReduce[1] / 100) * 100);
    }

    useEffect(() => {
        calcTotalAllHPRate();
    });

    return (
        <div>
            <h3>リーダースキル</h3>
            <h4>リーダー</h4>
            <p>HP倍率</p>
            <input type="number" value={LeaderHP} onChange={(e) => setLeaderHP(Number(e.target.value))} />
            <p>ダメージ軽減率1</p>
            <input type="number" value={LeaderReduce[0]} onChange={(e) => setLeaderReduce([Number(e.target.value), LeaderReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input type="number" value={LeaderReduce[1]} onChange={(e) => setLeaderReduce([LeaderReduce[0], Number(e.target.value)])} />%
            <h4>フレンド</h4>
            <p>HP倍率</p>
            <input type="number" value={FriendHP} onChange={(e) => setFriendHP(Number(e.target.value))} />
            <p>ダメージ軽減率1</p>
            <input type="number" value={FriendReduce[0]} onChange={(e) => setFriendReduce([Number(e.target.value), FriendReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input type="number" value={FriendReduce[1]} onChange={(e) => setFriendReduce([FriendReduce[0], Number(e.target.value)])} />%
            <h3>合計</h3>
            <h4>実質HP倍率</h4>
            <p>{TotalAllHPRate}</p>
            <h4>HP倍率</h4>
            <p>{TotalHPRate}</p>
            <h4>軽減率</h4>
            <p>{TotalReduceRate}%</p>
        </div>
    );
}