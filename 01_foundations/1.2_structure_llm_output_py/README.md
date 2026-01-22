### Day 1.2: Structured LLM Output

**Goal:** Return a LLM response in format that can be parsed into a object/structure

**Prerequisites:**
- OpenAI account and API key setup (see main README.md Prerequisites section)
- Python environment setup (see main README.md Environment Setup section)

**Steps:**
1. Create `hello_ai.py`:

```python
import json
from pydantic import BaseModel
from typing import List
import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

class TechAnalysis(BaseModel):
    name: str
    category: str
    pros: List[str]
    cons: List[str]

prompt = """
Analyze Python programming language and return a JSON object with:
- name: "Python"
- category: programming language type
- pros: array of 3 advantages
- cons: array of 2 disadvantages

Return only valid JSON, no other text.
"""

response = openai.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": prompt}]
)

raw_response = response.choices[0].message.content
if not raw_response:
    raise ValueError("No response from OpenAI")

# Parse JSON response
parsed_data = json.loads(raw_response)

# Validate with Pydantic model
validated_data = TechAnalysis(**parsed_data)

print("Raw response:", raw_response)
print("\nParsed and validated:")
print(f"Name: {validated_data.name}")
print(f"Category: {validated_data.category}")
print(f"Pros: {', '.join(validated_data.pros)}")
print(f"Cons: {', '.join(validated_data.cons)}")
```

2. Run it, see response: `python3 hello_ai.py`
3. See json output
```json
Raw response: {
    "name": "Python",
    "category": "programming language",
    "pros": [
        "readable and easy to understand syntax", 
        "large standard library", 
        "great for data analysis and machine learning"
    ],
    "cons": [
        "slower performance compared to languages like C or C++", 
        "Global Interpreter Lock (GIL) limitations"
    ]
}
```

**Done When:** You see both the raw JSON response and the parsed/validated structured output in your terminal

---