import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

function App() {
  return <h1 className={sourceCodePro.className}>App started</h1>;
}

export default App;
