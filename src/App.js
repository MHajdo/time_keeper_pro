import {useState} from 'react';
import './App.css';
import {generate_data} from './functions'
import Results from './Results';
import Form from './Form'


function App() {
  const [form_data, set_form_data] = useState({});
 

  return (
    <div className='container'>
      <Form form_data={form_data} set_form_data={set_form_data}/>
      <hr />
      { 'coworkers' in form_data ? 
      <Results generated_data={generate_data(form_data)}/>
      : ''
      }
    </div>
  );
}

export default App;
