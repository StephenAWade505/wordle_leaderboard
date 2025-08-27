// src/components/Leaderboard.tsx
import React from "react";

type Player = {
  id: string;       // unique identifier
  name: string;
  score: number;
  completed: boolean;
};

type LeaderboardProps = {
  players: Player[];
};

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
  // sort players by score (descending) so highest is first
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Wordle Leaderboard
      </h2>
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {sortedPlayers.map((player, index) => (
          <li
            key={player.id} // use unique id instead of index
            className="py-2 flex justify-between items-center text-gray-800 dark:text-gray-200"
          >
            <span>
              {index + 1}. {player.name} {/* display rank */}
            </span>
            <span>
              {player.completed ? player.score : "—"} {/* mark incomplete games */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
