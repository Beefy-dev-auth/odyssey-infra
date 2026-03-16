# Concepts

Odyssey is built around a simple idea:

AI memory should be observable, scoped, and governable.

Most retrieval systems can return similar chunks. Far fewer systems let developers inspect why those chunks were returned, how memory is isolated, or how retrieval behavior changes over time.

---

## Project-scoped memory

A project is the primary isolation boundary in Odyssey.

Every project maintains its own memory domain including:

- ingested text
- PDFs
- chunks
- retrieval activity
- usage tracking

This prevents cross-project memory contamination and allows teams to safely operate multiple memory environments.

Examples:

- separate customers
- staging vs production
- separate copilots
- internal knowledge domains

---

## Governed memory

Odyssey is not just a vector store.

It is a governed memory layer.

Memory is not only retrieved — it is also:

- scoped
- inspected
- logged
- measured

This is what makes Odyssey infrastructure rather than just storage.

---

## Evidence-first retrieval

When Odyssey retrieves memory, developers can inspect:

- what chunks were retrieved
- what ranked highest
- how scoring behaved

This makes debugging AI systems significantly easier.

---

## Hybrid retrieval

Odyssey retrieval combines multiple ranking signals:

- lexical matching
- semantic similarity
- recency weighting
- graph-aware relationships

Most production retrieval problems require multiple signals, not just embeddings.

---

## Automatic chunking

During ingest Odyssey automatically:

- cleans text
- chunks content
- generates embeddings
- stores retrieval-ready memory

Developers do not need to manually prepare chunk pipelines.

---

## Retrieval inspection

Inside the Odyssey UI developers can:

Dev Console → Retrieval

There they can:

- run retrieval queries
- inspect returned memory
- analyze scoring behavior
- export retrieved documents

This inspection capability is central to Odyssey.

Most AI stacks expose only the final answer.

Odyssey exposes the memory behind the answer.

---

## Usage tracking

Odyssey currently tracks:

- storage usage
- retrieval counts

Usage is measured per project.

This helps teams understand memory growth and operational cost.

---

## Multiple projects per user

Users can create multiple projects.

Each project acts as a separate memory domain.

This allows teams to organize knowledge systems safely.

---

## Summary

The core Odyssey model:

- memory belongs to a project
- ingest prepares retrieval-ready memory
- retrieval is hybrid
- results are inspectable
- memory behavior is observable
