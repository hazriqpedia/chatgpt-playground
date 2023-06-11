import FormSection from './components/FormSection';
import AnswerSection from './components/AnswerSection';
import BouncingDotsLoader from './components/BouncingDots';
import { OpenAIClient, AzureKeyCredential } from '@azure/openai'
import { useState } from 'react';

const App = () => {
  const [storedValues, setStoredValues] = useState([]);
  const [isLoadingData, setLoadingData] = useState(false);
  const chatGPT35TurboModel = 'gpt-35-turbo'

  const generateResponse = async (inputs, setInputs) => {
    const endpoint = inputs.endpoint || process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
    const key = inputs.key || process.env.REACT_APP_AZURE_OPENAI_KEY;
    try {
      setLoadingData(true);
      const t0 = performance.now();
      const openai = new OpenAIClient(endpoint, new AzureKeyCredential(key));
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
          setLoadingData(false);
        }
      }
    } catch (error) {
      console.log(error);
    }

  };

  const clearAnswersEvent = () => {
    setStoredValues([]);
  }
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
      <BouncingDotsLoader isLoadingData={isLoadingData} />
      <AnswerSection storedValues={storedValues} clearAnswersEvent={clearAnswersEvent} />
    </div>
  );
};

export default App;