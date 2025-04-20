# ✅ Phase 3: LangChain, Agents & LlamaIndex (Months 7–9)

## Month 7: LangChain Fundamentals

### Setup
- [ ] Install `langchain`, `openai`, `tiktoken`, `chromadb`, and other core packages.
- [ ] These libraries help you abstract GPT usage, store data in vectors, and chain logic.

### Language Models in LangChain
- [ ] Use `ChatOpenAI()` to plug in GPT models (`gpt-3.5`, `gpt-4`) with full control.
- [ ] Example: `llm = ChatOpenAI(temperature=0.7, model_name="gpt-4")`

### PromptTemplates
- [ ] Create reusable prompt patterns with placeholders like `{input}`, `{tone}`, `{format}`.
- [ ] Example: "Write a tweet in a {tone} voice: {input}" → Inject dynamically.

### LLM Chains
- [ ] Use `LLMChain` to feed input through a prompt and get output.
- [ ] Example: Chain a prompt that summarizes an article into bullet points.

### Memory
- [ ] Add memory to preserve chat history using `ConversationBufferMemory`.
- [ ] This helps GPT maintain context over multiple turns (like a real chat).

### Tool Integration
- [ ] Wrap any Python function or API as a `Tool` GPT can call when needed.
- [ ] Example: Wrap a function `get_stock_price("AAPL")` and GPT can trigger it mid-chat.

---

## Month 8: LangChain Agents & Tool Use

### LangChain Agents
- [ ] Agents use GPT to decide which tools to call and when, using reasoning steps.
- [ ] Example: "What’s 2x Apple stock price today?" → Agent calls stock tool then calculator.

### Toolset Examples
- [ ] Add tools like web search (SerpAPI), calculator, file reader, and more.
- [ ] Example: Wrap a Wikipedia API so GPT can search facts before answering.

### Multi-Step Reasoning
- [ ] Agents follow a `Thought → Action → Observation` process like a human.
- [ ] Example: "Thought: I need stock price → Action: call API → Observation: $190 → Final Answer"

### Error Handling in Agents
- [ ] Use timeouts, retries, and default values when a tool fails or times out.
- [ ] Example: If API call fails, GPT replies: “Couldn’t fetch the latest data. Try again later.”

### Deploying a Simple Agent API
- [ ] Expose your agent logic as an API using FastAPI.
- [ ] Example: `/ask` endpoint receives a question → passes it to agent → streams the response.

---

## Month 9: LlamaIndex & Knowledge Integration (RAG Setup)

### Intro to RAG (Retrieval-Augmented Generation)
- [ ] RAG lets GPT answer based on your documents (not just its training).
- [ ] Example: Ask “What are the refund terms in our policy PDF?” → GPT finds and answers from it.

### LlamaIndex Core
- [ ] Load documents using `SimpleDirectoryReader` or Notion/PDF loaders.
- [ ] Chunk long files into searchable segments using `RecursiveTextSplitter`.

### Embedding + Vector DB
- [ ] Convert text chunks into vectors using OpenAI/HuggingFace embeddings.
- [ ] Store them in `Chroma`, `FAISS`, or `Pinecone` for fast similarity search.

### Query Engines
- [ ] Ask a question → use vector similarity to retrieve top-matching chunks → pass to GPT.
- [ ] Example: Ask “Summarize chapter 2” → Retrieves chapter content → GPT summarizes it.

### LlamaIndex + LangChain Integration
- [ ] Wrap your LlamaIndex search as a LangChain retriever tool.
- [ ] Example: Build an agent that calls LlamaIndex when it needs document-based info.

---

## Projects for Practice

### Project 1: AI Assistant + Search Tool
- [ ] Agent uses GPT, search tool, and calculator to answer complex queries.
- [ ] Example: “What’s the revenue of Apple this year, and how does it compare to 2022?”

### Project 2: PDF Q&A Chatbot
- [ ] User uploads a PDF → App indexes it → User chats with it via GPT.
- [ ] Example: “What are the terms in Clause 4 of this contract?” → Extracts and explains.

### Project 3: Research Report Generator
- [ ] User gives a topic → GPT-agent searches, summarizes, and formats a report.
- [ ] Example: “Create a 500-word summary of recent AI trends with sources.”

---

## Resources
- [ ] 📘 LangChain Docs: https://docs.langchain.com/
- [ ] 📘 LlamaIndex Docs: https://docs.llamaindex.ai/
- [ ] 🎥 LangChain by
