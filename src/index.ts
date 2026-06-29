export type { ConnectionState, RelayConfig, RelayConnection } from './connection.js';
export { openConnection, closeConnection } from './connection.js';
export type { MessageEnvelope } from './envelope.js';
export { createEnvelope, serializeEnvelope, deserializeEnvelope } from './envelope.js';
export { PROTOCOL_VERSION, HANDSHAKE_TIMEOUT_MS, performHandshake } from './protocol.js';
export type { HandshakeResult } from './protocol.js';
