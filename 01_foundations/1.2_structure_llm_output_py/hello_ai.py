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