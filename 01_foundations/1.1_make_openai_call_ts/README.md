### Day 1: First API Call (TypeScript) (20 min)

**Goal:** Make your first OpenAI API call using TypeScript

**Prerequisites:**
- OpenAI account and API key setup (see main README.md Prerequisites section)
- Node.js environment setup (see main README.md Environment Setup section)

**Steps:**
1. Install dependencies: `npm install`
7. Create `hello_ai.ts`:

```typescript
import OpenAI from 'openai';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello! Tell me a joke.' }],
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    process.exit(1);
  }
}

main();
```

2. Run it, see response: `npm start` or `npx ts-node hello_ai.ts`
3. Laugh: "Sure! Why was the math book sad?
Because it had too many problems."

**Done When:** You see an AI-generated joke in your terminal

---

**Available Scripts:**
- `npm start` - Run the TypeScript file directly with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run with file watching for development