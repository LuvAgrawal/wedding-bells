import { Route, Routes } from "react-router-dom";
import Header from "./components/semantics/Header";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/test" element={<Header />} />
    </Routes>
  </>;
};

export default App;
