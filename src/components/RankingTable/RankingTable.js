import React from "react";
import "./ranking-table.scss";
import { RankingTableEntry } from "../RankingTableEntry/RankingTableEntry";

export function RankingTable({ entries }) {
  return (
    <table className="ranking-table">
      <thead>
        <tr>
          <th>Miejsce</th>
          <th>Imię i nazwisko</th>
          <th>Wiek</th>
          <th>Kraj</th>
          <th>Punkty</th>
          <th>Trend</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((player) => {
          if (player.place < 4) {
            return null;
          }
          return (
            <RankingTableEntry
              key={player.id}
              id={player.id}
              place={player.place}
              name={`${player.firstName} ${player.lastName}`}
              age={new Date().getFullYear() - player.birthYear}
              nationality={player.nationality.abbreviation}
              points={player.points}
              trend={player.trend}
            />
          );
        })}
      </tbody>
    </table>
  );
}
