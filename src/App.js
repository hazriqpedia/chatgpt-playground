import FormSection from './components/FormSection';
import AnswerSection from './components/AnswerSection';
import { OpenAIClient, AzureKeyCredential } from '@azure/openai'
import { useState } from 'react';

const App = () => {
  const [storedValues, setStoredValues] = useState([]);
  const chatGPT35TurboModel = 'gpt-35-turbo'

  const generateResponse = async (inputs, setInputs) => {
    try {
      const t0 = performance.now();
      const openai = new OpenAIClient(inputs.endpoint, new AzureKeyCredential(inputs.key));
      const response = await openai.getChatCompletions(chatGPT35TurboModel, [{ role: "user", content: inputs.prompt }]);
      const t1 = performance.now();
      for (const choice of response.choices) {
        if (choice.message.content) {
          setStoredValues([
            {
              question: inputs.prompt,
              answer: choice.message.content,
              tokensUsage: response.usage.totalTokens,
              timeUsage: t1 - t0

            },
            ...storedValues,
          ]);
          setInputs({ ...inputs, prompt: '' });
        }
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div>
      <div className="header-section">
        <h1>🏰 ChatGPT Playground 🏰</h1>
        <p>
          A playground to test out your prompts for <b>Azure OpenAI</b> before developing it further.
        </p>
        <p className='subnote'>It's using <i>chatGPT 3.5 Turbo</i> model at the moment. Give it a try!</p>
      </div>

      <FormSection generateResponse={generateResponse} />
      <AnswerSection storedValues={storedValues} />
    </div>
  );
};

export default App;