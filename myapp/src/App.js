import './App.css';

function App() {
  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum natus, minima laboriosam, pariatur possimus dolorum, ex qui velit cumque iure quam accusantium blanditiis illo eaque repellendus illum eos nesciunt."

  return (
    <div className="App">
      <Message text = {text}/>
    </div>
  );
}

export default App;

const Message = ({text}) => {

  return(
    <div className='message'>
      <p className='message__text'>{text}</p>
    </div>
  )
}