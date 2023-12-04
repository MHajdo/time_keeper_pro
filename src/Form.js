import {useState} from 'react';
import './App.css';


function Form({form_data, set_form_data}) {
  const [coworkers, set_coworkers] = useState([]);
  const [start_from, set_start_from] = useState('08:00');
  const [start_to, set_start_to] = useState('09:00');
  const [end_from, set_end_from] = useState('16:00');
  const [end_to, set_end_to] = useState('17:00');



  function generate(e){
    e.preventDefault();
    set_form_data({coworkers, start_from, start_to, end_from, end_to})
  }


  return (
      <form action='parseForm'>
        <textarea rows='10' cols='50' defaultValue='Vpiši imena sodelavcev, ločenih z vejico' onChange={e => set_coworkers(e.target.value.split(','))}></textarea>
        <div>
          <h3>Začetek delovnika</h3>
          <label>Od</label>
          <input name='start-from' type='time' defaultValue='08:00' onChange={e => set_start_from(e.target.value)} />
          <label>do</label>
          <input name='start-to' type='time' defaultValue='09:00' onChange={e => set_start_to(e.target.value)} />
        </div>
        <div>
          <h3>Konec delovnika</h3>
          <label>Od</label>
          <input name='end-from' type='time' defaultValue='16:00' onChange={e => set_end_from(e.target.value)} />
          <label>do</label>
          <input name='end-to' type='time' defaultValue='17:00' onChange={e => set_end_to(e.target.value)} />
        </div>
        <button onClick={generate}>Generiraj ure</button>
      </form>
  );
}

export default Form;
