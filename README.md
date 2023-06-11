# chatgpt-playground

Azure OpenAI chatGPT Playground. This is powered by chatGPT 3.5 Turbo Model.

![homepage](public/Original.png)
![with Response](public/withAnswer.png)


## Prerequisite
- Azure OpenAI Endpoint
- Azure OpenAI Key


## Quickstart
- Run `npm install && npm start` 
- ChatGPT playground typically will be available on your `localhost:3000`.
- [Optional] Other than the fields (keyed in manually on the playground), the credentials of Azure OpenAI can also be stored via `.env` file via these environment variable:
    - REACT_APP_AZURE_OPENAI_ENDPOINT
    - REACT_APP_AZURE_OPENAI_KEY

## Credits
This is an adaption of tutorial from [kinsta.com](https://kinsta.com/blog/chatgpt-clone/).

Additional to that:
- Boucinng Dots Loader in React js from [dev.to](https://dev.to/kirteshbansal/bouncing-dots-loader-in-react-4jng)


## Changelog
- June 9th: init
- June 10th:
    - Added masking for endpoint.
    - Added response metadata (tokens and response time).
    - Added loading animation when waiting for response.
    - Added clear button to clear all answers.


### Back up.
- npx create-react-app .
- npm install @azure/openai
- npm install --save font-awesome

