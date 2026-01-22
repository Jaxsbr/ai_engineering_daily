import OpenAI from 'openai';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface TechAnalysis {
  name: string;
  category: string;
  pros: string[];
  cons: string[];
}

const prompt = `
Analyze TypeScript programming language and return a JSON object with:
- name: "TypeScript"
- category: programming language type
- pros: array of 3 advantages
- cons: array of 2 disadvantages

Return only valid JSON, no other text.`

async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const rawResponse = response.choices[0].message.content;
    if (!rawResponse) {
      throw new Error('No response from OpenAI');
    }

    // Parse and validate the JSON response
    const parsed: TechAnalysis = JSON.parse(rawResponse);

    // Basic validation
    if (!parsed.name || !parsed.category || !Array.isArray(parsed.pros) || !Array.isArray(parsed.cons)) {
      throw new Error('Invalid response structure');
    }

    console.log('Raw response:', rawResponse);
    console.log('\nParsed and validated:');
    console.log(`Name: ${parsed.name}`);
    console.log(`Category: ${parsed.category}`);
    console.log(`Pros: ${parsed.pros.join(', ')}`);
    console.log(`Cons: ${parsed.cons.join(', ')}`);

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();