import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const navData = [
  { path: "/catalog", label: "Каталог" },
  { path: "/orders", label: "Заказы" },
  { path: "/cart", label: "Корзина" },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation navigationData={navData} />
    </QueryClientProvider>
  );
}

export default App;
