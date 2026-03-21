# odyssey-infra
Memory RAG for AI Systems

- inspect exactly what is retrieved  
- understand why it was selected  
- refine memory to improve results  
- debug behavior without calling a model  

- https://odyssey-infra.com

---

## Overview

Most AI systems rely on retrieval that cannot be inspected.

When a model produces a bad answer:
- you cannot see what context it used  
- you cannot verify what was retrieved  
- debugging becomes guesswork  

Odyssey exposes the retrieval layer so you can inspect and control it directly.

---

## What you get

- **Visibility** — view retrieved documents and chunks  
- **Control** — shape retrieval using tags, entities, and relations  
- **Debugging** — test retrieval without calling a model  
- **Iteration** — refine memory to improve future responses  

---

## Quickstart

### Ingest memory

```json
POST /api/v1/ingest

{
  "text": "Odyssey enables inspectable retrieval for AI systems.",
  "tags": ["docs"]
}
```

### Retrieve context

```json
POST /api/v1/retrieve

{
  "query": "how does retrieval work?",
  "top_k": 3
}
```

---

## Example response

```json
{
  "items": [
    {
      "text": "Odyssey enables inspection of retrieved memory before model execution.",
      "doc_title": "overview.pdf",
      "tags": ["retrieval"],
      "source": "file"
    }
  ],
  "count": 1,
  "meta": {
    "project_id": "YOUR_PROJECT_ID",
    "graph_used": true
  }
}
```

---

## How it works

Odyssey organizes memory into:

- **Documents** — raw inputs  
- **Chunks** — indexed retrieval units  
- **Entities** — key concepts  
- **Relations** — connections between concepts  
- **Tags** — additional control signals  

Retrieval combines these signals to return relevant context.

---

## Retrieval workflow

1. Ingest memory into a project  
2. Structure memory (entities, relations, tags)  
3. Run retrieval queries  
4. Inspect returned context  
5. Refine memory to improve results  

---

## Authentication

```bash
x-api-key: YOUR_API_KEY
```

---

## Use cases

- AI applications with persistent memory  
- Internal knowledge systems  
- Agent memory layers  
- Retrieval debugging and evaluation  

---

## Links

- Product: https://odyssey-infra.com 
- Docs: https://odyssey-infra.com/docs  
