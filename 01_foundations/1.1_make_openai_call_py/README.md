### Day 1: First API Call (20 min)

**Goal:** Make your first OpenAI API call

**Steps:**
1. Sign up for OpenAI account
2. Get API key
3. Copy `.env_example` and rename it to `.env`: `cp .env_example .env`
4. Update `your_api_key_here` in `.env` to your API key. (Note the .gitignore in this repo is configured to ignore .env files and thus prevent you from making an accidental api key commit)
5. Set up Python environment (see main README.md for instructions)
6. Create `hello_ai.py`:

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

7. Run it, see response: `python3 hello_ai.py`
8. Laugh: "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"

**Done When:** You see an AI-generated joke in your terminal

---