import { Source_Code_Pro } from "next/font/google";
import PageSkeleton from "../components/PageSkeleton";

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

function App({ Component, pageProps }) {
  return (
    <div className={sourceCodePro.className}>
      <PageSkeleton>
        <Component {...pageProps} />
      </PageSkeleton>
    </div>
  );
}

export default App;
