```mermaid
graph LR
    TaskController -->|calls / delegates| TaskService
    TaskService -->|throws| Exceptions
    TaskService -->|Creates / Updates / Consults / Deletes| PrismaService
    PrismaService -->|maps to table| Tasks (BD)
```