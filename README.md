# ai-engineering-daily

## Environment Setup

Choose your preferred language and follow the appropriate setup instructions below.

### Python Environment Setup (Required for Python lessons)

Before starting any Python-based lessons, set up your environment:

1. **Install Python** (if needed) - Ensure you have Python 3.6+ installed
2. **Navigate to the lesson directory** and create a virtual environment there:
   ```bash
   # Change to the specific lesson directory
   cd 01_foundations/1.1_make_openai_call_py  # or whatever lesson you're working on

   # Create virtual environment in the lesson directory
   python3 -m venv venv

   # Activate the virtual environment
   # On macOS/Linux:
   source venv/bin/activate
   # On Windows:
   # venv\Scripts\activate
   ```

   **Important:** Create a separate virtual environment in each lesson directory since different lessons may have different dependencies. This prevents conflicts between lessons.

   **Troubleshooting:** If you don't have `pip` available globally, the virtual environment will include its own `pip` installation. This is why virtual environments are the recommended approach for Python dependency management.

3. **Install dependencies in the virtual environment:**
   ```bash
   pip install -r requirements.txt
   ```

**Note:** Each lesson directory will have its own `venv` folder. Remember to activate the environment in the correct lesson directory when working on that lesson. To deactivate when done, run `deactivate` in your terminal.

### TypeScript/Node.js Environment Setup (Required for TypeScript lessons)

Before starting any TypeScript-based lessons, set up your environment:

1. **Install Node.js** (if needed) - Ensure you have Node.js 18+ installed. Download from [nodejs.org](https://nodejs.org/)
2. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```
3. **Navigate to the lesson directory** and install dependencies:
   ```bash
   # Change to the specific lesson directory
   cd 01_foundations/1.1_make_openai_call_ts  # or whatever lesson you're working on

   # Install dependencies
   npm install
   ```

**Note:** Each TypeScript lesson directory will have its own `node_modules` folder and `package.json`. Dependencies are managed locally per lesson to prevent conflicts.

## 01 Foundation

- 1.1 Make an API(OpenAI) call
  - [Python version](01_foundations/1.1_make_openai_call_py/)
  - [TypeScript version](01_foundations/1.1_make_openai_call_ts/) 
