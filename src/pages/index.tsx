// src/pages/index.tsx
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  const samplePlayers = [
    { id: '0001', name: "Alice", score: 3, completed: true },
    { id: '0002', name: "Bob", score: 5, completed: true },
    { id: '0003', name: "Charlie", score: 0, completed: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mt-4 text-center">Wordle Leaderboard App</h1>
      <Leaderboard players={samplePlayers} />
    </div>
  );
}
