"use client";
import { StatsOverview } from "@/components/stats-overview";
import { NodeCard } from "@/components/node-card";
import { LatencyChart } from "@/components/latency-chart";
import { EventLog } from "@/components/event-log";
import { KafkaSimulator } from "@/lib/kafka-simulator";
import { useEffect, useState } from "react";
import { NodeData, EventData } from "@/lib/types";

export default function Dashboard() {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const kafka = new KafkaSimulator();

    kafka.on("nodeUpdate", (node: NodeData) => {
      setNodes((prev) => {
        const updated = prev.filter((n) => n.id !== node.id);
        return [...updated, node];
      });
    });

    kafka.on("event", (event: EventData) => {
      setEvents((prev) => [event, ...prev.slice(0, 49)]);
    });

    kafka.start();

    return () => kafka.stop();
  }, []);

  return (
    <main className="p-8 space-y-8">
      <header>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <span className="text-blue-400"> Sistema Monitoreo</span>
        </h1>
      </header>

      <StatsOverview nodes={nodes} />

      <section>
        <h2 className="text-lg font-semibold mb-2">Monitor de latencia</h2>
        <LatencyChart nodes={nodes} />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Nodos</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {nodes.map((node) => (
            <NodeCard key={node.id} node={node} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Eventos(Kafka)</h2>
        <EventLog events={events} />
      </section>
    </main>
  );
}
