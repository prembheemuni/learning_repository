# ✅ Phase 2: GPT Wrappers & Prompt Engineering (Months 4–6)

## Month 4: OpenAI API & Prompt Engineering Basics

### OpenAI Python SDK
- [ ] Install and use the `openai` Python SDK to interact with GPT models easily.
- [ ] Secure your API key using environment variables and avoid hardcoding sensitive info.

### Roles & Message Format
- [ ] Learn how to use `system`, `user`, and `assistant` messages to guide the conversation.
- [ ] Maintaining correct roles improves instruction following and keeps context clean.

### Prompt Engineering
- [ ] Zero-shot prompting means giving no examples, relying on model’s general ability.
- [ ] Few-shot prompting provides examples within the prompt to steer GPT's output format and tone.
- [ ] Chain-of-thought prompting encourages GPT to show its reasoning steps clearly.
- [ ] Adjust temperature, max tokens, and top_p to control creativity and output length.

### Function Calling (Tool Use via GPT)
- [ ] Let GPT decide when to call structured backend functions like `get_weather(city)`.
- [ ] After the tool is called, feed the result back into GPT to continue the conversation.

### Streaming Responses
- [ ] Instead of waiting for a full response, use streaming to get tokens in real-time.
- [ ] Implement token streaming with `stream=True` and serve it with SSE or WebSockets in FastAPI.

---

## Month 5: GPT Wrapper Design & Usage Optimization

### GPT Wrapper Services
- [ ] Create a Python service class that wraps prompt calls with consistent logic and retries.
- [ ] Centralize token usage tracking, error handling, and model versioning in one place.

### Output Formatting
- [ ] Use system prompts or regex to ensure output is always structured (e.g., JSON or markdown).
- [ ] Validate GPT output before using it in downstream applications or UI.

### Prompt Logging and Versioning
- [ ] Log all prompt/response pairs into a file or database for testing and iteration.
- [ ] Maintain versions of prompts so you can test improvements over time.

### Rate Limiting and Throttling
- [ ] Respect OpenAI's rate limits to avoid API rejections or bans.
- [ ] Use `tenacity` or exponential backoff methods to retry failed calls gracefully.

### Multi-model Support
- [ ] Add logic to switch between `gpt-3.5` and `gpt-4` based on task or user tier.
- [ ] Lower-priority requests can default to cheaper models to reduce cost.

---

## Month 6: Build GPT-Powered Projects

### Project 1: Email Writing Assistant
- [ ] Take user input (like intent and tone) and generate emails with GPT in a specific format.
- [ ] Allow tone/style toggles like “professional,” “friendly,” or “apologetic” via prompt variables.

### Project 2: Article Summarizer API
- [ ] Paste an article and get a summary, list of key points, and important quotes.
- [ ] Use streaming to show the summary in real-time as it’s being generated.

### Project 3: Function Calling Agent
- [ ] GPT parses a user's request, calls the appropriate backend function, and continues the chat.
- [ ] For example, GPT sees “Weather in Tokyo” → calls `get_weather()` → includes result in response.

### Bonus (Optional)
- [ ] Add user authentication and quota limits to control usage.
- [ ] Wrap your GPT tools as a FastAPI service and Dockerize for deployment on cloud/VPS.

---

## Resources
- [ ] OpenAI Python SDK Docs: https://platform.openai.com/docs
- [ ] Prompt Engineering Guide: https://github.com/dair-ai/Prompt-Engineering-Guide
- [ ] Token counter: https://github.com/openai/tiktoken
- [ ] GitHub examples for streaming, function calling, and prompt chaining
