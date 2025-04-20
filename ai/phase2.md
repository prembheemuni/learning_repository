# ✅ Phase 2: GPT Wrappers & Prompt Engineering (Months 4–6)

## Month 4: OpenAI API & Prompt Engineering Basics

### OpenAI Python SDK
- [ ] Install and configure the `openai` Python package
- [ ] Set up API keys securely using environment variables
- [ ] Use the **Chat API** (`gpt-3.5`, `gpt-4`) for assistant-style conversations
- [ ] Learn the difference between `Completion` API and `ChatCompletion` API

### Roles & Message Format
- [ ] Understand system, user, and assistant roles
- [ ] Learn how to structure chat history
- [ ] Build multi-turn conversation history to maintain context

### Prompt Engineering
- [ ] Try **zero-shot prompts** (no examples)
- [ ] Practice **few-shot prompting** (add examples to guide output)
- [ ] Use **chain-of-thought** prompts for step-by-step reasoning
- [ ] Experiment with temperature, max tokens, and top_p

### Function Calling (Tool Use via GPT)
- [ ] Define structured functions (e.g., `get_weather(city)`)
- [ ] Use GPT to decide when and how to call functions
- [ ] Handle function call responses and feed back into the conversation

### Streaming Responses
- [ ] Implement token-by-token streaming using `stream=True`
- [ ] Use `Server-Sent Events (SSE)` or WebSockets to push streamed content to the frontend

---

## Month 5: GPT Wrapper Design & Usage Optimization

### GPT Wrapper Services
- [ ] Create a Python class `GPTService` to abstract prompt calls
- [ ] Add logging, retry, timeout, and error handling
- [ ] Track cost using token counting (`tiktoken`, `openai` usage API)

### Output Formatting
- [ ] Parse structured outputs (JSON, lists, tables)
- [ ] Validate and format LLM output before using downstream

### Prompt Logging and Versioning
- [ ] Store prompt-response pairs in a database or file
- [ ] Version prompts and outputs for testing and improvement

### Rate Limiting and Throttling
- [ ] Respect OpenAI rate limits (RPM, TPM)
- [ ] Add retry/backoff for API failures

### Multi-model Support
- [ ] Support both GPT-3.5 and GPT-4 in your wrapper
- [ ] Add logic to fallback to cheaper model if appropriate

---

## Month 6: Build GPT-Powered Projects

### Project 1: Email Writing Assistant
- [ ] Accept input like “write a follow-up email to HR”
- [ ] Use few-shot prompt templates for tone/style
- [ ] Allow response regeneration with different tones

### Project 2: Article Summarizer API
- [ ] Input: paste an article or link
- [ ] Output: TL;DR summary, highlights, quote extraction
- [ ] Stream response to the frontend

### Project 3: Function Calling Agent
- [ ] Ask questions like “What’s the weather in Tokyo tomorrow?”
- [ ] GPT calls a backend function `get_weather(location)`
- [ ] Merges weather result back into conversation
- [ ] Logs both conversation and function usage

### Bonus (Optional):
- [ ] Add user auth and usage tracking
- [ ] Use FastAPI to expose your GPT wrappers as public/private APIs
- [ ] Dockerize the app for deployment

---

## Resources
- [ ] OpenAI Python SDK Docs: https://platform.openai.com/docs
- [ ] Prompt Engineering Guide: https://github.com/dair-ai/Prompt-Engineering-Guide
- [ ] tiktoken for token counting: https://github.com/openai/tiktoken
- [ ] ChatGPT Function Calling Examples on GitHub
