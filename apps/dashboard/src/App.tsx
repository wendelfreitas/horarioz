import { Button } from '@stellar-cultures/ui';

function App() {
  return (
    <div className="w-100 h-screen flex">
      <div className="bg-white w-1/4 h-screen p-10 border-r-2 border-gray-100">
        <p>Menu</p>
      </div>
      <div className="bg-content w-full h-screen p-10">
        <p className="font-sans">Content</p>
      </div>
      <div className="bg-white w-1/3 h-screen p-10 border-l-2 border-gray-100">
        <p></p>
        <Button variant="primary" onClick={() => console.log(2)}>
          RightBar
        </Button>
        <br />
        <br />
        <Button variant="secondary" onClick={() => console.log(2)}>
          Secondary Button
        </Button>
      </div>
    </div>
  );
}

export default App;
