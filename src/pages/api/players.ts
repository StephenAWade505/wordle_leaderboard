import type { NextApiRequest, NextApiResponse } from "next";

type Player = {
  id: string;
  name: string;
  score: number;
  completed: boolean;
};

const samplePlayers : Player[] = [
    { id: "0001", name: "Alice", score: 3, completed: true },
    { id: "0002", name: "Bob", score: 5, completed: true },
    { id: "0003", name: "Charlie", score: 0, completed: false },
  ];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate score changes
  const dynamicPlayers = samplePlayers.map((player) => {
    if (player.completed) {
      return {
        ...player,
        score: player.score + Math.floor(Math.random() * 3), // random +0,1,2
      };
    }
    return player;
  });

  res.status(200).json(dynamicPlayers);
}
