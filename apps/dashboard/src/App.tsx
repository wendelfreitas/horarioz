import reactLogo from './assets/react.svg';
import { useTranslation } from 'react-i18next';
import { Button } from '@stellar-cultures/ui';
import { Box, Container, Heading } from '@chakra-ui/react';

function App() {
  const { t } = useTranslation();

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Box justifyContent="center" alignItems="center" textAlign="center">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <Heading>{t('@HelloWorld')}</Heading>
        <div className="card">
          <Button />
        </div>
      </Box>
    </Container>
  );
}

export default App;
