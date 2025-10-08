import { Books } from "./components/Books";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <main className="container">
      <Header />
      <Books />
      <Footer />
    </main>
  );
}
