import './App.css';
import OptionSelect from './components/OptionSelect';
import { arrayItems } from './AIOptions';
import { useState } from 'react';
import Translate from './components/Translate';
import openAiKey from './OpenAi.key';

import { Configuration,OpenAIApi, } from 'openai';


function App() {
  const configuration = new Configuration({
    apiKey:process.env.REACT_APP_BASE_URL
  });
  const openai = new OpenAIApi(configuration);
  const [result, setResult] = useState('')
  const [option, setOption] = useState({});
  const [input, setInput] = useState('');

  const selectOption = (option) => {
    setOption(option);

  }
// console.log(process.env.REACT_APP_BASE_URL)

  const getResults = async () => {
    let object = {...option, prompt:input}
    console.log(object)

    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text)
    console.log(response.data.choices[0].text)
  }


  return (
    <div className="App">
      {Object.values(option).length === 0 ?
          (<OptionSelect arrayItems={arrayItems} selectOption={selectOption}/>)
        :
        (<Translate getResults={getResults} setInput={setInput} result={result}/>)
      }

    </div>
    
  );
}

export default App;
   