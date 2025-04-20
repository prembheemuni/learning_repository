# ✅ Phase 1: Python & FastAPI Mastery (Months 1–3)

## Month 1: Python Fundamentals

### Core Concepts
- [ ] Understand functions, classes, modules, and packages
- [ ] Learn how to import and organize modules
- [ ] Practice building small reusable functions and objects

### Data Structures
- [ ] Master built-in types: list, dict, set, tuple
- [ ] Perform operations (looping, filtering, updating)

### OOP Concepts
- [ ] Learn Inheritance (e.g., class Child(Base):)
- [ ] Understand Polymorphism and how methods can behave differently
- [ ] Use Encapsulation to manage class internals

### Working with Files
- [ ] Read/write text, JSON, and CSV files
- [ ] Use context manager (`with open(...)`) safely

### Error Handling and Logging
- [ ] Use try/except blocks effectively
- [ ] Log errors using Python’s `logging` module

### Virtual Environments & Dependencies
- [ ] Create and activate `venv` or `poetry` environment
- [ ] Install and freeze requirements (`pip freeze > requirements.txt`)

### Advanced Python
- [ ] Learn how to use decorators (`@your_decorator`)
- [ ] Understand generators (`yield`)
- [ ] Use context managers (`__enter__`, `__exit__` or `with` statement)

---

## Month 2–3: FastAPI Mastery

### Async & Concurrency
- [ ] Understand how `async def` works
- [ ] Learn about the `asyncio` event loop

### FastAPI Routing & Basics
- [ ] Create basic GET, POST, PUT, DELETE routes
- [ ] Use `Path`, `Query`, and `Body` params

### Request/Response Models
- [ ] Define input and output schemas using Pydantic
- [ ] Use type hints to get auto-generated docs

### Dependency Injection
- [ ] Create reusable components using `Depends()`
- [ ] Inject auth, DB, and config into routes

### Background Tasks
- [ ] Use `BackgroundTasks` to run post-response jobs
- [ ] Example: save logs, send emails, clean data

### Middleware & CORS
- [ ] Add custom middleware to log requests/responses
- [ ] Enable CORS for cross-origin requests

### Authentication
- [ ] Implement JWT token-based authentication
- [ ] Understand OAuth2 flows for third-party login
- [ ] Secure endpoints with API keys

### Error Handling
- [ ] Customize exception classes
- [ ] Handle 400, 401, 404, 500 errors properly

### API Documentation
- [ ] Use `/docs` and `/redoc` for Swagger and ReDoc UI
- [ ] Customize titles, descriptions, tags in OpenAPI

---

## Practice Projects

- [ ] **To-Do App with JWT Auth**
  - Create users, login, token auth
  - Add, delete, and complete tasks
  - Use async DB queries (SQLite/PostgreSQL)

- [ ] **Blog API**
  - CRUD operations on blog posts
  - Author/user separation
  - Use Pydantic and FastAPI routing best practices

- [ ] **File Uploader + Processor**
  - Upload a document (PDF/CSV)
  - Save it and run a background job to summarize
  - Return processed output via endpoint

---

## Resources
- [ ] Read official FastAPI documentation
- [ ] Watch Sebastián Ramírez’s YouTube talks
- [ ] Follow Real Python tutorials on async and APIs
