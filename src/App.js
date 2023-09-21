import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Section from './components/section'
import Section2 from './components/section2'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
