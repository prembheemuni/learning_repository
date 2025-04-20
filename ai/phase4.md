# ✅ Phase 4: Advanced RAG Systems, Vector Databases & Hybrid Search (Months 10–12)

## Month 10: RAG Architecture Deep Dive

### RAG System Design
- [ ] Learn the full flow: user input → vector search → relevant chunks → prompt + LLM.
- [ ] RAG allows GPT to answer accurately by augmenting it with **external knowledge**.

### Chunking Strategies
- [ ] Experiment with chunk sizes, overlaps, and sentence-level splitting.
- [ ] Example: Use `RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)` for better context.

### Metadata Tagging
- [ ] Tag each document chunk with metadata like `source`, `page`, `date`, `doc_type`.
- [ ] This allows filtered search (e.g. “Only show answers from policy documents after 2022”).

### Context Injection Methods
- [ ] Inject retrieved chunks into the prompt directly, either as bullet points or in a structured format.
- [ ] Example: Add `"Context:\n{docs}"` before the actual question to guide GPT.

### Contextual Compression
- [ ] Compress large documents using `LLMSummarizer` or map-reduce chains before embedding.
- [ ] Example: Summarize 50 pages into 10 focused paragraphs, then vectorize those.

---

## Month 11: Vector Databases & Hybrid Search

### Vector DB Concepts
- [ ] Learn about vector dimensions, cosine similarity, indexing, and recall/precision trade-offs.
- [ ] Choose between `Chroma`, `Pinecone`, `Weaviate`, `Qdrant`, or `FAISS`.

### ChromaDB & FAISS
- [ ] Use `Chroma` for local RAG prototypes and `FAISS` for memory-optimized searches.
- [ ] Example: `chroma.persist()` saves vectors to disk, enabling offline querying.

### Pinecone or Weaviate Setup
- [ ] Try cloud-hosted vector DBs like Pinecone for scalable search across millions of vectors.
- [ ] Example: Push thousands of blog post embeddings to Pinecone, then build a semantic search tool.

### Hybrid Search (Vector + Keyword)
- [ ] Combine vector similarity and traditional keyword search using hybrid methods.
- [ ] Example: Score = `0.5 * cosine_similarity + 0.5 * keyword_overlap` → improves factuality.

### Reranking with LLMs
- [ ] Rerank retrieved chunks using GPT or BGE reranker models for better context.
- [ ] Example: Ask GPT: “Which of these retrieved chunks best answers the user's query?”

---

## Month 12: Building & Scaling RAG Applications

### Context Limitations
- [ ] Understand token limits (e.g. 16k, 32k for GPT-4) and how chunk count affects results.
- [ ] Avoid overloading prompts — inject only the most relevant and reranked chunks.

### Retrieval Pipelines
- [ ] Build modular pipelines: Embed → Store → Retrieve → Format → Prompt → LLM.
- [ ] Example: User asks question → app searches Pinecone → injects top 3 chunks → GPT answers.

### API Endpoint Design for RAG
- [ ] Create `/ask-doc`, `/upload`, and `/reindex` endpoints with FastAPI.
- [ ] Accept user files, index them, and allow live querying with async support.

### Caching and Logging
- [ ] Cache embedding results and search results to reduce cost and improve performance.
- [ ] Log all inputs/outputs with timestamps and document sources for audit/debugging.

### Frontend RAG Chat UI
- [ ] Use React + Markdown rendering to display answers, citations, and sources.
- [ ] Example: Highlight the source document link and chunk content next to each GPT reply.

---

## Projects for Practice

### Project 1: Smart Legal Assistant
- [ ] Upload contracts → Ask questions like “Can this be terminated early?” → Get cited answers.
- [ ] Example: "Clause 7 allows early termination with 30-day notice."

### Project 2: HR Knowledge Chatbot
- [ ] Ingest company policy documents → Chatbot answers HR questions for employees.
- [ ] Example: “How many PTO days do I have left?” → Based on employee handbook data.

### Project 3: AI-Powered Search Portal
- [ ] Upload a Notion export or doc collection → Build a semantic + keyword search portal.
- [ ] Example: Search “team onboarding process” → Shows summarized, sourced info across pages.

---

## Resources
- [ ] 🔍 Pinecone Docs: https://docs.pinecone.io
- [ ] 📘 RAG Best Practices (OpenAI): https://platform.openai.com/docs/guides/retrieval
- [ ] 📘 ChromaDB: https://docs.trychroma.com/
- [ ] 🧠 RAG + Hybrid Search Demo Notebooks (LangChain, LlamaIndex GitHub)
