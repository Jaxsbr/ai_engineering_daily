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