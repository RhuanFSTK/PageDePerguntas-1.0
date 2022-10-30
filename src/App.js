import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>  
          <div className='menu'>
            <div className='logo'>
              <h3>Rhuan Dev</h3>
            </div>
            <div className='iten-menu'>
              <a href="#">Login</a>
            </div>
          </div>
          <div className='form'>
            <h2>Vamos conversar</h2>
            <form>
              <div className='items-form'>
                <input type="text" placeholder="Seu nome..."/>
                <input type="text" placeholder="Email..."/>
                <input type="text" placeholder="Assunto..."/>
                <input type="text" placeholder="Faça sua pergunta..."/>
                <input type="submit"/>
              </div>
            </form>
          </div>
        </div>
      </div> 
      <div className='container'>
        <div className='container-center-single'>
          <div className='single'>
            <h3>Você já experimentou comida de cachorro?</h3>
            <p>resposta...</p>
          </div>
          <div className='single'>
            <h3>Você já fingiu estar doente para não ter que fazer algo?</h3>
            <p>resposta...</p>
          </div>
          <div className='single'>
            <h3>O que você faria se ficasse invisível por 24h?</h3>
            <p>resposta...</p>
          </div>
          <div className='single'>
            <h3>Você conversa sozinho se olhando no espelho?</h3>
            <p>resposta...</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
