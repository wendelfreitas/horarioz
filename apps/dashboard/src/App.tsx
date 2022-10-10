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
        <div className="ml-10">
          <Button variant="primary" onClick={() => console.log(2)}>
            Hello Dash
          </Button>
        </div>
        <p>{t('@HelloWorld')}</p>
      </div>
    </div>
  );
}

export default App;
