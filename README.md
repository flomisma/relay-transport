# @flomisma/relay-transport

Zero-persistence relay protocol for the Flomisma infrastructure stack.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## What this is

Connection lifecycle management, message envelope format, and relay protocol
handshake for zero-persistence transport. No message state is retained after
connection close.

## Install

```bash
npm install @flomisma/relay-transport
```

## Usage

```typescript
import { openConnection, createEnvelope, performHandshake } from '@flomisma/relay-transport'

const conn = openConnection({ endpoint: 'wss://relay.example.com' })
await performHandshake(conn)

const env = createEnvelope('tx.submit', { amount: 100 }, 0)
const raw = serializeEnvelope(env)
```

## API

### Connection

```typescript
openConnection(config: RelayConfig): RelayConnection
closeConnection(conn: RelayConnection): void
```

### Envelope

```typescript
createEnvelope(type: string, payload: unknown, ttl?: number): MessageEnvelope
serializeEnvelope(env: MessageEnvelope): string
deserializeEnvelope(raw: string): MessageEnvelope
```

### Protocol

```typescript
PROTOCOL_VERSION: string
HANDSHAKE_TIMEOUT_MS: number
performHandshake(conn: RelayConnection): Promise<HandshakeResult>
```

## Zero persistence

No connection state or message payload is retained after `closeConnection()`.
All `MessageEnvelope` instances are ephemeral — `ttl: 0` (default) means no
persistence is requested.

## Part of Flomisma

This package is part of the [Flomisma](https://github.com/flomisma)
open infrastructure stack.

## License

MIT
