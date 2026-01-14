### Day 1: First API Call (TypeScript) (20 min)

**Goal:** Make your first OpenAI API call using TypeScript

**Steps:**
1. Sign up for OpenAI account (if you haven't already)
2. Get API key from [OpenAI Platform](https://platform.openai.com/api-keys)
3. Copy `.env_example` and rename it to `.env`: `cp .env_example .env`
4. Update `your_api_key_here` in `.env` to your API key. (Note: the .gitignore in this repo is configured to ignore .env files and thus prevent you from making an accidental API key commit)
5. Set up Node.js environment (see main README.md for instructions)
6. Install dependencies: `npm install`
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

8. Run it, see response: `npm start` or `npx ts-node hello_ai.ts`
9. Laugh: "Sure! Why was the math book sad?
Because it had too many problems."

**Done When:** You see an AI-generated joke in your terminal

---

**Available Scripts:**
- `npm start` - Run the TypeScript file directly with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run with file watching for development