"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NodeData } from "@/lib/types";

export function NodeCard({ node }: { node: NodeData }) {
  const statusColor =
    node.status === "Online"
      ? "bg-green-500/20 text-green-400"
      : node.status === "Degraded"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-red-500/20 text-red-400";

  return (
    <Card className="bg-neutral-900 border-neutral-800">
      <CardHeader className="flex justify-between items-center pb-2">
        <div>
          <h3 className="text-sm font-semibold">{node.name}</h3>
          <p className="text-xs text-gray-500">{node.id}</p>
        </div>
        <Badge className={statusColor}>{node.status}</Badge>
      </CardHeader>
      <CardContent className="text-sm text-gray-400 space-y-1">
        <p> Latencia: <span className="text-gray-100">{node.latency}ms</span></p>
        <p> Conexiones: <span className="text-gray-100">{node.connections}</span></p>
        <p className="text-xs text-gray-600 mt-2">Ultima actualizacion: {new Date(node.timestamp).toLocaleTimeString()}</p>
      </CardContent>
    </Card>
  );
}
