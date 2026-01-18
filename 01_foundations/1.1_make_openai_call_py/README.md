### Day 1: First API Call (20 min)

**Goal:** Make your first OpenAI API call

**Prerequisites:**
- OpenAI account and API key setup (see main README.md Prerequisites section)
- Python environment setup (see main README.md Environment Setup section)

**Steps:**
1. Create `hello_ai.py`:

```python
import openai
import os
from dotenv import load_dotenv

# this loads the api key from the .env file
load_dotenv()

response = openai.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hello! Tell me a joke."}]
)

print(response.choices[0].message.content)
```

2. Run it, see response: `python3 hello_ai.py`
3. Laugh: "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"

**Done When:** You see an AI-generated joke in your terminal

---