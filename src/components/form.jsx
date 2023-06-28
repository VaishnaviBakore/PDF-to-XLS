import React from 'react';
import '../App.css';
import Radio from './Radio';
import CheckBox1 from './Checkbox1';
import CheckBox2 from './Checkbox2';


const Form = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form validation or data handling here
    console.log('Submitted!');
  };

  return (
    <div className='form-data'>
    <form  onSubmit={handleSubmit}>
        <Radio/>
      <label>
        <table>
            <td>Full Name:</td>
            <td><CheckBox1/></td>
        </table>
        <input className="form-inp" type="text"  />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
        <table>
            <td>Phone number:</td>
            <td><CheckBox1/></td>
        </table>
        <input className="form-inp"
          type="text"
        />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
        <table>
            <td>Home address:</td>
            <td><CheckBox1/></td>
        </table>
        <input className="form-inp"
          type="text"
        />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
      <table>
            <td>Email:</td>
            <td><CheckBox1/></td>
        </table>
        <input className="form-inp"
          type="email"
        />
      </label>
      <CheckBox2/>
      
    </form>
    <button style={{width:"100px",alignItems:'center'}} className="btn" type="submit">Submit</button>
    </div>
  );
};

export default Form;
