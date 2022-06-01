import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Header title="TextUtils" about="About"/>
      {/* <Header/> */}
      <div className="container my-3">

      <TextForm heading="Enter the text to analyze below" />
      </div>
    </div>
  );
}

export default App;
