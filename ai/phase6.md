# ✅ Phase 6: Agents, Orchestration & Workflow Automation (Months 16–18)

## Month 16: Agents & Tool Use

### What Are Agents?
- [ ] Agents are AI systems that can reason and decide actions step-by-step using tools.
- [ ] Unlike chatbots, agents plan and execute tasks (e.g. “Book a flight, then email details”).

### LangChain Agents
- [ ] LangChain’s AgentExecutor lets LLMs call tools in sequence with memory and reasoning.
- [ ] Example: User asks for latest news → Agent uses WebSearchTool + SummaryTool.

### Tool Definition
- [ ] Define tools like `search_web()`, `get_weather()`, or `run_sql()` using Python functions.
- [ ] You expose them to the agent using a `Tool` object in LangChain or CrewAI.

### Planning + Memory
- [ ] Agents use ReAct (reasoning + acting) loop or Plan-and-Execute method for task planning.
- [ ] Add `ConversationBufferMemory` to give agents memory of previous tasks or chats.

### Multi-Step Execution
- [ ] Build agents that follow a plan: e.g. scrape → summarize → store → notify user.
- [ ] Example: Ask for “top tech trends” → agent pulls blogs → extracts keywords → emails summary.

---

## Month 17: Agent Frameworks (CrewAI, LangGraph, AutoGen)

### CrewAI Overview
- [ ] CrewAI lets you coordinate multiple agents (“crew members”) with roles + goals.
- [ ] Each agent has a toolset, persona, and objective (like “researcher”, “writer”, “reviewer”).

### CrewAI Roles & Memory
- [ ] Assign role descriptions and instructions (e.g., “as a security analyst, find vulnerabilities”).
- [ ] Agents can share memory via global context or through logs and summaries.

### LangGraph Basics
- [ ] LangGraph = graph-based workflows for branching and conditional task flows.
- [ ] Example: “If task A fails, try B. If success, move to C” → useful for automation.

### AutoGen Framework
- [ ] AutoGen creates LLM agents that communicate with each other to solve tasks.
- [ ] Example: UserAgent and CodeAgent chat to solve coding questions or debug scripts.

### Custom Agent Logic
- [ ] Add your own logic and fallback chains if tools fail or output is weak.
- [ ] Example: If GoogleSearchTool returns no result → fallback to DuckDuckGoTool.

---

## Month 18: Real AI Workflows & Deployments

### Data Pipelines with Agents
- [ ] Automate data collection → cleaning → summarization using agents.
- [ ] Example: Scrape CSVs weekly → clean using Pandas → summarize trends → save to Notion.

### Workflow Orchestration
- [ ] Use LangGraph or Prefect to build scheduled, stateful AI workflows.
- [ ] Example: Daily market summary bot → fetch news → summarize → send via Slack/email.

### Scheduled Agents
- [ ] Run agents on cron jobs or background workers using Celery or FastAPI background tasks.
- [ ] Example: Agent checks server health every hour → alerts if errors are found.

### Error Handling & Logging
- [ ] Implement logging for all agent actions, retries, failures, and fallback tool use.
- [ ] Saves time debugging and improves agent transparency.

### Agent-Driven UIs
- [ ] Build frontends where users give tasks → agent executes and returns updates.
- [ ] Example: Project management assistant: “Organize my to-dos” → agent sorts, groups, emails.

---

## Projects for Practice

### Project 1: Personal Task Agent
- [ ] Accept natural language tasks → Agent schedules it, sets reminders, or files documents.
- [ ] Example: “Remind me to send rent invoice and archive PDF by Friday.”

### Project 2: Research + Write Bot Crew
- [ ] ResearchAgent gathers info → WriterAgent creates draft → EditorAgent improves grammar.
- [ ] Example: “Write article on 2024 AI trends” → 3-agent crew collaborates.

### Project 3: Auto Data Cleaner
- [ ] Upload CSV → Agent detects schema issues, cleans nulls, normalizes text, outputs clean CSV.
- [ ] Example: Upload messy ecommerce dataset → Cleaned and reported in under 30 seconds.

### Project 4: GitHub Issue Solver
- [ ] Agent scans GitHub repo, explains issues, generates fix suggestions, and PR templates.
- [ ] Example: Ask “fix bug in auth.js” → Agent finds line, fixes logic, creates PR instructions.

---

## Resources

- [ ] 🧠 [LangChain Agents](https://docs.langchain.com/docs/components/agents/)
- [ ] 🛠️ [CrewAI GitHub](https://github.com/joaomdmoura/crewAI)
- [ ] 🌐 [LangGraph](https://www.langchain.com/langgraph)
- [ ] 🤖 [AutoGen by Microsoft](https://github.com/microsoft/autogen)
- [ ] 📚 [ReAct & Planning Papers](https://arxiv.org/abs/2210.03629)
