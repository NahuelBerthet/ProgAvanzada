"use client";
import { EventData } from "@/lib/types";

export function EventLog({ events }: { events: EventData[] }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 max-h-64 overflow-y-auto text-sm font-mono">
      {events.length === 0 && (
        <p className="text-gray-600 italic">Sin eventos...</p>
      )}
      {events.map((event) => (
        <div key={event.id} className="mb-1">
          <span className="text-gray-500">{new Date(event.timestamp).toLocaleTimeString()} — </span>
          <span className="text-gray-300">{event.message}</span>
        </div>
      ))}
    </div>
  );
}
