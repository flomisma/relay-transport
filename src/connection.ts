/**
 * Zero-persistence relay connection lifecycle.
 *
 * Zero-persistence: no connection state is retained after close().
 * All message envelopes are ephemeral.
 */
import crypto from 'node:crypto';

export type ConnectionState = 'connecting' | 'open' | 'closing' | 'closed';

export interface RelayConfig {
  endpoint: string;
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export interface RelayConnection {
  id: string;
  state: ConnectionState;
  createdAt: Date;
  endpoint: string;
}

export function openConnection(config: RelayConfig): RelayConnection {
  return {
    id: crypto.randomUUID(),
    state: 'connecting',
    createdAt: new Date(),
    endpoint: config.endpoint,
  };
}

export function closeConnection(conn: RelayConnection): void {
  (conn as { state: ConnectionState }).state = 'closed';
  // Zero-persistence: nothing is stored after this point.
}
