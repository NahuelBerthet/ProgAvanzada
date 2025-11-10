"use client";
import { EventEmitter } from "events";
import { v4 as uuidv4 } from "uuid";
import { NodeData, EventData } from "./types";

export class KafkaSimulator extends EventEmitter {
  private interval: NodeJS.Timeout | null = null;
  private nodes: NodeData[] = [];

  constructor() {
    super();
    this.nodes = Array.from({ length: 5 }).map((_, i) => ({
      id: uuidv4(),
      name: `Node-${i + 1}`,
      latency: 0,
      connections: 0,
      status: "Online",
      timestamp: Date.now(),
    }));
  }

  start() {
    this.interval = setInterval(() => {
      const node = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      node.latency = Math.floor(Math.random() * 500);
      node.connections = Math.floor(Math.random() * 1000);
      node.status =
        node.latency > 400
          ? "Offline"
          : node.latency > 250
          ? "Degraded"
          : "Online";
      node.timestamp = Date.now();

      const event: EventData = {
        id: uuidv4(),
        message: `${node.name} → ${node.status} (${node.latency}ms)`,
        timestamp: Date.now(),
      };

      this.emit("nodeUpdate", node);
      this.emit("event", event);
    }, 1000);
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
  }
}
