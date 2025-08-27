// src/pages/index.tsx
import { useEffect, useState } from "react";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const fetchPlayers = () => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log("Failed to fetch players", err));
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mt-4 text-center">Wordle Leaderboard App</h1>
      <Leaderboard players={players} />
       <button
        onClick={fetchPlayers}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Scores
      </button>
    </div>
    
  );
}
