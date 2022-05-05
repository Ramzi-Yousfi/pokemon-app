import React,{FunctionComponent , useState} from 'react';

const App : FunctionComponent = () => {
  const [name, setName] = useState<Array<string|number>>(['ramzi',2]);
  return (
    <div>
      {
        name.map(he =><h1>{he}</h1>)

      }

    </div>
  );
  }
export default App;
