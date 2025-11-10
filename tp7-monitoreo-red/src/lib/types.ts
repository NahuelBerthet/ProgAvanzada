export type NodeData = {
  id: string;
  name: string;
  latency: number;
  connections: number;
  status: "Online" | "Degraded" | "Offline";
  timestamp: number;
};

export type EventData = {
  id: string;
  message: string;
  timestamp: number;
};
