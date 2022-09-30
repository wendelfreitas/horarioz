import reactLogo from './assets/react.svg';
import { useTranslation } from 'react-i18next';
import { Button } from '@stellar-cultures/ui';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <p>{t('@HelloWorld')}</p>
        <div className="card">
          <Button onClick={() => console.log(2)}>Hello Dash</Button>

          <Button onClick={() => console.log('void')}>Test</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
