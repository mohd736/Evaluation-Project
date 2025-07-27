import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffDashboard from './component/StaffDashboard';
import DeanDashboard from './Dean/DeanDashboard';
import AdminDashboard from './Admin/AdminDashboard';
import './App.css';
import StaffManager from './Staff/StaffManager';
import SystemUserAuth from './SystemUser/SystemUserAuth';
import FormAForm from './Staff/FormAForm';
import HeadDashboard from './Head/HeadDashboard';
import FormAList from './Head/FormAList';
import FormBFull from './Head/FormB1';
import FormB3 from './Head/FormB3';
import FormB2 from './Head/FormB2';
import FormB4 from './Head/FormB4';
import Recommendation from './Head/Recommendation';
import RecommendationApprovalForm from './Approval/RecommendationApprovalForm';



function App() {
  return (
  //   <div className="p-10 bg-blue-100 text-black">
  //   <h1 className="text-3xl font-bold">Hello from Tailwind + React!</h1>
  // </div>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<SystemUserAuth/>}/>
          <Route path="home" element={<StaffDashboard />} />
          <Route path="/dean" element={<DeanDashboard />} />
          <Route path="/head" element={<HeadDashboard />} />
          <Route path="/formalist" element={<FormAList />} />
          <Route path="/formB" element={<FormBFull />} />
          <Route path="/form3" element={<FormB3 />} />
          <Route path="/form2" element={<FormB2 />} />
          <Route path="/form4" element={<FormB4 />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path='Staff' element={<StaffManager/>}/>
          <Route path='formA' element={<FormAForm/>}/>
          <Route path='approval' element={<RecommendationApprovalForm/>}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;