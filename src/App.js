import './Config.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Notify from './Notify.jsx';
import KakaoLogin from './KakaoLogin.jsx';
import KakaoRedirect from './KakaoRedirect.jsx';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/notify" element={<Notify/>}/>
          <Route path="/" element={<KakaoLogin/>}/>
          <Route path="/oauth" element={<KakaoRedirect/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
