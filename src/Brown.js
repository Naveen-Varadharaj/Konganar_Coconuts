import './index.css';
import brown from './brown.jfif';
function Brown() {
    return (
      <div className="brown">
        <h1>Brown Coconuts</h1>
        <div>
            <img className='img' src={brown} alt='Brown'/>
            <br />
        </div>
      </div>
    );
  }
  
  export default Brown;
  