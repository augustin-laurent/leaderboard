"use client";
import { useState, useEffect } from 'react'
import axios from 'axios';

export function TFT() {

    const url = "https://ddragon.leagueoflegends.com/api/versions.json";

    axios.get(url)
      .then(response => {
        const last_ddragon_version = (response.data[0]);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    const rankOrder = {
        "challenger i": 1,
        "grandmaster i": 2,
        "master i": 3,
        "diamond i": 4,
        "diamond ii": 5,
        "diamond iii": 6,
        "diamond iv": 7,
        "emerarld i": 9,
        "emerarld ii": 9,
        "emerarld iii": 10,
        "emerarld iv": 11,
        "platinum i": 12,
        "platinum ii": 13,
        "platinum iii": 14,
        "platinum iv": 15,
        "gold i": 16,
        "gold ii": 17,
        "gold iii": 18,
        "gold iv": 19,
        "silver i": 20,
        "silver ii": 21,
        "silver iii": 22,
        "silver iv": 23,
        "bronze i": 24,
        "bronze ii": 25,
        "bronze iii": 26,
        "bronze iv": 27,
        "iron i": 28,
        "iron ii": 29,
        "iron iii": 30,
        "iron iv": 31,
    };

    const rankIcon = {
        "challenger i": require("/public/rank/Rank=Challenger.png"),
        "grandmaster i": require("/public/rank/Rank=Grandmaster.png"),
        "master i": require("/public/rank/Rank=Master.png"),
        "diamond i": require("/public/rank/Rank=Diamond.png"),
        "diamond ii":  require("/public/rank/Rank=Diamond.png"),
        "diamond iii": require("/public/rank/Rank=Diamond.png"),
        "diamond iv": require("/public/rank/Rank=Diamond.png"),
        "emerarld i":  require("/public/rank/Rank=Emerald.png"),
        "emerarld ii": require("/public/rank/Rank=Emerald.png"),
        "emerarld iii": require("/public/rank/Rank=Emerald.png"),
        "emerarld iv": require("/public/rank/Rank=Emerald.png"),
        "platinum i": require("/public/rank/Rank=Platinum.png"),
        "platinum ii": require("/public/rank/Rank=Platinum.png"),
        "platinum iii": require("/public/rank/Rank=Platinum.png"),
        "platinum iv": require("/public/rank/Rank=Platinum.png"),
        "gold i": require("/public/rank/Rank=Gold.png"),
        "gold ii": require("/public/rank/Rank=Gold.png"),
        "gold iii": require("/public/rank/Rank=Gold.png"),
        "gold iv": require("/public/rank/Rank=Gold.png"),
        "silver i": require("/public/rank/Rank=Silver.png"),
        "silver ii": require("/public/rank/Rank=Silver.png"),
        "silver iii": require("/public/rank/Rank=Silver.png"),
        "silver iv": require("/public/rank/Rank=Silver.png"),
        "bronze i": require("/public/rank/Rank=Bronze.png"),
        "bronze ii": require("/public/rank/Rank=Bronze.png"),
        "bronze iii": require("/public/rank/Rank=Bronze.png"),
        "bronze iv": require("/public/rank/Rank=Bronze.png"),
        "iron i": require("/public/rank/Rank=Iron.png"),
        "iron ii": require("/public/rank/Rank=Iron.png"),
        "iron iii": require("/public/rank/Rank=Iron.png"),
        "iron iv": require("/public/rank/Rank=Iron.png")
    };

    return(
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold text-center">TFT</h1>
            <div className="overflow-x-table">
            <table className="table">
                <tbody>
                    <tr>
                            <th>Position</th>
                            <th>Summoner icon</th>
                            <th>Name</th>
                            <th>Account</th>
                            <th>Rank</th>
                            <th>LP</th>
                            <th>Games count</th>
                            <th>Win count</th>
                            <th>Loose count</th>
                            <th>Victory rate</th>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}