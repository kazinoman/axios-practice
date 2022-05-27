import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import GetUser from "./components/getUser";
import RqForm from "./components/rqForm";

import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GetUser />
        <Form />
        <RqForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
