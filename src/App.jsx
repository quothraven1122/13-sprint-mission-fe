import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "@/layouts/MainLayout";
import { MarketPage } from "@/pages";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <MarketPage />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
