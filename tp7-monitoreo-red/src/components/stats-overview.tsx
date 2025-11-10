"use client";
import { Card, CardContent } from "@/components/ui/card";
import { NodeData } from "@/lib/types";

export function StatsOverview({ nodes }: { nodes: NodeData[] }) {
  const total = nodes.length;
  const online = nodes.filter((n) => n.status === "Online").length;
  const degraded = nodes.filter((n) => n.status === "Degraded").length;
  const offline = nodes.filter((n) => n.status === "Offline").length;

  const stats = [
    { label: "Total Nodes", value: total },
    { label: "Online", value: online, color: "text-green-400" },
    { label: "Degraded", value: degraded, color: "text-yellow-400" },
    { label: "Offline", value: offline, color: "text-red-400" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="bg-neutral-900 border-neutral-800 text-center">
          <CardContent className="p-4">
            <p className="text-gray-400 text-sm">{s.label}</p>
            <p className={`text-2xl font-semibold ${s.color ?? ""}`}>{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
