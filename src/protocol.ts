import crypto from 'node:crypto';
import type { RelayConnection } from './connection.js';

export const PROTOCOL_VERSION = '1.0.0';
export const HANDSHAKE_TIMEOUT_MS = 5000;

export type HandshakeResult = { success: boolean; sessionId: string | null };

export async function performHandshake(
  conn: RelayConnection,
): Promise<HandshakeResult> {
  if (conn.state === 'closed') {
    return { success: false, sessionId: null };
  }
  // Stub: in production this negotiates the relay session over the transport.
  (conn as { state: string }).state = 'open';
  return { success: true, sessionId: crypto.randomUUID() };
}
