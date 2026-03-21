# Architecture

Odyssey is designed as a memory RAG layer for AI systems.

It sits between your application and your knowledge base, governing how memory is ingested, retrieved, and inspected.

---

## High level system

Application / Agent  
↓  
Odyssey API  
↓  
Memory processing (chunking + embeddings)  
↓  
Hybrid retrieval engine  
↓  
Odyssey inspection console

---

## Core layers

Odyssey consists of four layers:

1. project-scoped memory  
2. ingestion pipeline  
3. retrieval engine  
4. developer inspection console  

---

## Project-scoped memory

Projects act as the primary isolation boundary.

Every ingest and retrieval request belongs to a project.

This prevents memory leakage across environments and customers.

---

## Ingestion pipeline

Odyssey supports:

- text ingest
- PDF ingest

During ingest Odyssey automatically:

- normalizes text
- chunks documents
- generates embeddings
- stores memory items

This makes memory retrieval-ready immediately.

---

## Retrieval engine

The retrieval engine uses hybrid ranking including:

- lexical similarity
- semantic similarity
- recency weighting
- graph-aware relationships

This produces more stable retrieval results than vector search alone.

---

## Developer inspection console

Inside the Odyssey web interface developers can:

Dev Console → Retrieval

From there they can:

- run queries
- inspect retrieved memory
- review scoring behavior
- export documents

This visibility allows teams to debug AI behavior directly.

---

## Why Odyssey exists

Odyssey exposes the memory system behind the model.

Developers can see:

- what knowledge exists
- what was retrieved
- how it was ranked
- how memory evolves over time
