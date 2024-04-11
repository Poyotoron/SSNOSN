import React, { use, useEffect } from "react";

export default function Gravity() {
    const [gravityDamage, setGravityDamage] = React.useState(0);
    const [reducedDamage, setReducedDamage] = React.useState(0);
    const [leaderReduce, setLeaderReduce] = React.useState([0, 0]);
    const [friendReduce, setFriendReduce] = React.useState([0, 0]);

    function numberRound(num: number, digit: number) {
        return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    function calcReducedDamage() {
        setReducedDamage(numberRound(gravityDamage * (1 - leaderReduce[0] / 100) * (1 - leaderReduce[1] / 100) * (1 - friendReduce[0] / 100) * (1 - friendReduce[1] / 100), 4));
    }

    function printReducedDamage() {
        if (reducedDamage >= 100) {
            return (
                <div>
                    <span style={{ color: "red" }}>{reducedDamage}%</span>
                </div>
            );
        } else {
            return (
                <div>
                    <span style={{ color: "green" }}>{reducedDamage}%</span>
                </div>
            );
        }
    }

    useEffect(() => {
        calcReducedDamage();
    });

    return (
        <div>
            <h3>割合ダメージ</h3>
            <input value={gravityDamage} onChange={(e) => setGravityDamage(Number(e.target.value))} />%
            <h3>リーダースキル</h3>
            <p>ダメージ軽減率1</p>
            <input value={leaderReduce[0]} onChange={(e) => setLeaderReduce([Number(e.target.value), leaderReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input value={leaderReduce[1]} onChange={(e) => setLeaderReduce([leaderReduce[0], Number(e.target.value)])} />%
            <h3>フレンド</h3>
            <p>ダメージ軽減率1</p>
            <input value={friendReduce[0]} onChange={(e) => setFriendReduce([Number(e.target.value), friendReduce[1]])} />%
            <p>ダメージ軽減率2</p>
            <input value={friendReduce[1]} onChange={(e) => setFriendReduce([friendReduce[0], Number(e.target.value)])} />%
            <h3>実質割合ダメージ</h3>
            <p>{printReducedDamage()}</p>
        </div>
    );
}