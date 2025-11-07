import { Route, Routes } from "react-router-dom";
import Layout from "./components/semantics/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return <>
    <Layout >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  </>;
};

export default App;
