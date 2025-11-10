"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { NodeData } from "@/lib/types";

export function LatencyChart({ nodes }: { nodes: NodeData[] }) {
  const data = nodes.map((n) => ({
    name: n.name,
    latency: n.latency,
  }));

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="latency" stroke="#3b82f6" strokeWidth={2} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
