# Demo Data

Sample text files used for testing Odyssey ingest and retrieval.

## What this is

This folder contains simple policy-style documents that simulate real memory:
- tenant-specific rules
- vendor requirements
- internal policies

They are intentionally small and readable so you can quickly understand what gets ingested and retrieved.

## What it’s for

Use these files to:

- test ingest (`/api/v1/ingest`)
- verify retrieval results (`/api/v1/retrieve`)
- inspect how memory is chunked and returned
- experiment with tags, entities, and structure

## How to use

Run the ingest example:

```bash
node examples/ingest-basic.js
