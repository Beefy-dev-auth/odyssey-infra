# Quickstart

Odyssey is a governed memory RAG for AI systems. It allows you to ingest knowledge into project-scoped memory, retrieve context through a single API, and inspect what was retrieved inside the Odyssey UI.

This quickstart walks through the core flow:

1. create a project  
2. ingest memory  
3. retrieve context  
4. inspect retrieval behavior  


# 1. Create a project

Projects are the top-level isolation boundary in Odyssey.

Each project keeps its own:

- memory items
- chunks
- retrieval behavior
- logs
- usage tracking

A single user can manage multiple projects, and memory stays scoped to the selected project.

Inside the Odyssey app:

- open **Projects**
- create a new project
- select that project before ingesting or retrieving


# 2. Ingest memory

Odyssey currently supports two ingest modes:

- text ingest
- PDF ingest

During ingest, Odyssey automatically:

- normalizes content
- chunks text
- generates embeddings
- stores retrieval-ready memory
- associates memory with the selected project

- Text ingest

Example request:

{
  "text": "Vendor renewals now require finance approval after 2025.",
  "source": "policy_update"
}

- PDF ingest

PDF files can also be uploaded and ingested. Odyssey extracts text, chunks the document, and stores the resulting memory items under the selected project.


# 3. Retrieve context

Use the retrieve endpoint to query project-scoped memory. 

Odyssey retrieval blends:

- lexical signals
- semantic similarity
- recency weighting
- graph-aware relationships

Example request:

{
  "query": "What changed in the vendor renewal policy?",
  "limit": 5
}

Odyssey returns ranked memory items for the selected project.


# 4. Inspect retrieval behavior

Inside the Odyssey app go to:

Dev Console → Retrieval

From there you can:

- run queries
- inspect retrieved memory
- review scoring behavior
- export the documents that were retrieved

Utilizing retrieval testing without needing to call a model. 

Instead of treating retrieval as a hidden layer, Odyssey exposes what the system retrieved and how it ranked.


- Core model

The mental model is simple:

- ingest knowledge into a project
- retrieve from that project
- inspect what was retrieved
- debug memory behavior when results look wrong

Odyssey is designed for teams that want memory to be inspectable, auditable, and controlled in production.


- Current support

Odyssey currently supports:

- text ingest
- PDF ingest
- project-scoped retrieval
- retrieval inspection in the developer console
- storage usage tracking
- retrieval usage tracking
