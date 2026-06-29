import crypto from 'node:crypto';

export interface MessageEnvelope {
  id: string;
  type: string;
  payload: unknown;
  timestamp: number;
  ttl: number; // ms, default 0 = no persistence
}

export function createEnvelope(
  type: string,
  payload: unknown,
  ttl: number = 0,
): MessageEnvelope {
  return {
    id: crypto.randomUUID(),
    type,
    payload,
    timestamp: Date.now(),
    ttl,
  };
}

export function serializeEnvelope(env: MessageEnvelope): string {
  return JSON.stringify(env);
}

export function deserializeEnvelope(raw: string): MessageEnvelope {
  const parsed = JSON.parse(raw) as MessageEnvelope;
  if (typeof parsed.id !== 'string' || typeof parsed.type !== 'string') {
    throw new Error('Invalid envelope: missing required fields');
  }
  return parsed;
}
