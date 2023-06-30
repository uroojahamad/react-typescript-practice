import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Hello from "./hello";

export default function UserRoute () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/hello"  element={<Hello />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}
