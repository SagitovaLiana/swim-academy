import HomePage from "./components/homepage";
import { Header, Footer } from "./components/index";
import { useLanguage } from "./hooks/useLanguage";


export default function App() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
            <main className="main">
        <HomePage />
      </main>
      <Footer />
    </>
  );
};
