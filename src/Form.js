import './index.css';

const Form = ()=> {
    return (
      <div className="form">
        <h1 className='fh1'>Fill the coconut details below</h1>
        <div>  
        <form className='f1'>
            <label>Customer Name:</label><br />
            <input className='in' type='text'></input>
            <br /> <br />
            <label>Phone Number:</label><br />
            <input className='in' type='number'></input>
            <br /> <br />
            <label>Address:</label><br />
            <textarea className='in' ></textarea>
            <br /> <br />
            <label>Total Quantity:</label><br />
            <input className='in' type='text'></input>
            <br /> <br />
            <button className='submit'>Submit</button>
            <br /> <br />
           
        </form>
        </div>
        
      </div>
    );
  }
  
  export default Form;