import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.jsx';
import Layout from './layouts/layout.jsx';

// MAIN
import Dashboard from './pages/dashboard/dashboard.jsx';
import Directory from './pages/directory/directory.jsx';
import Attendance from './pages/attendance/attendance.jsx';
import Tasks from './pages/tasks/tasks.jsx';
import Overtime from './pages/overtime/overtime.jsx';
import Leave from './pages/leave/leave.jsx';

//REPORTS PAGE
import ApprovalOvertime from './pages/reports/approvalOvertime.jsx';
import ApprovalLeave from './pages/reports/approvalLeave.jsx';
import AttendanceSummary from './pages/reports/attendanceSummary.jsx';

//SETTINGS & PROFILE
import Calendar from './pages/Calendar/calendar.jsx';
import EventType from './pages/eventType/eventType.jsx';
import AddEvent from './pages/addEvent/addEvent.jsx';
import Profile from './pages/profile/profile.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes (Wrapped in the Sidebar Layout) */}
        <Route element={<Layout />}>
          
          {/* Main Navigation */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/leave" element={<Leave />} />
          
          {/* Reports */}
          <Route path="/report/overtime" element={<ApprovalOvertime />} />
          <Route path="/report/leave" element={<ApprovalLeave />} />
          <Route path="/report/summary" element={<AttendanceSummary />} />

          {/* Settings & Profile */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event-type" element={<EventType />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;