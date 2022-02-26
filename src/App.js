import Home from "./pages/Home";

import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    </>
  );
}

export default App;
