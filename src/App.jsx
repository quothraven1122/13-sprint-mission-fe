import "./App.css";
import MainLayout from "@/layouts/MainLayout";
import { MarketPage } from "@/pages";
function App() {
  return (
    <>
      <MainLayout>
        <MarketPage />
      </MainLayout>
    </>
  );
}

export default App;
