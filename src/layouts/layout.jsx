import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Fingerprint, ClipboardList, 
  Clock, FileText, FileBarChart, Calendar, Tags, 
  CalendarPlus, User, LogOut, Bell, ChevronDown
} from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const headerTitle = location.pathname === '/dashboard' ? 'Dashboard' : '';
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [taskExpanded, setTaskExpanded] = useState(
    location.pathname.startsWith('/tasks')
  );

  useEffect(() => {
    if (location.pathname.startsWith('/tasks')) setTaskExpanded(true);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-white flex flex-col h-full shrink-0">
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center gap-2 p-4 pb-8 mt-2">
            <span className="text-yellow-400 font-bold text-xl">HRIS</span>
            <span className="font-bold text-xl tracking-tight">HS SYSTEM</span>
          </div>

          <div className="px-4">
            <p className="text-[10px] text-gray-400 font-semibold mb-4 ml-2">MAIN</p>
            <nav className="space-y-0.5">
              <SidebarLink to="/dashboard"  icon={<LayoutDashboard size={18} />} label="Dashboard" />
              <SidebarLink to="/directory"  icon={<Users size={18} />}           label="Employment Directory" />
              <SidebarLink to="/attendance" icon={<Fingerprint size={18} />}     label="My Attendance" />

              {/* My Task Board expandable group */}
              <div>
                <button
                  onClick={() => setTaskExpanded((v) => !v)}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors text-sm cursor-pointer ${
                    location.pathname.startsWith('/tasks')
                      ? 'bg-yellow-50 text-black font-semibold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  <ClipboardList size={18} className="shrink-0" />
                  <span className="flex-1 text-left">My Task Board</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${taskExpanded ? 'rotate-180' : ''}`} />
                </button>

                {taskExpanded && (
                  <div className="ml-8 mt-0.5 mb-1 space-y-0.5 border-l-2 border-gray-100 pl-2">
                    <NavLink
                      to="/tasks/v1"
                      className={({ isActive }) =>
                        `block text-[13px] py-1 px-2 rounded-md transition-colors ${
                          isActive ? 'text-black font-bold bg-yellow-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      My Task Board v1
                    </NavLink>
                    <NavLink
                      to="/tasks/v2"
                      className={({ isActive }) =>
                        `block text-[13px] py-1 px-2 rounded-md transition-colors ${
                          isActive ? 'text-black font-bold bg-yellow-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      My Task Board v2
                    </NavLink>
                  </div>
                )}
              </div>

              <SidebarLink to="/overtime" icon={<Clock size={18} />}     label="My Overtime" />
              <SidebarLink to="/leave"    icon={<FileText size={18} />}  label="My Leave" />
              
              <div className="flex items-center gap-3 px-3 py-1.5 text-gray-600">
                <FileBarChart size={18} />
                <span className="text-sm">My Report</span>
              </div>

              <div className="ml-8 mt-0 mb-1 space-y-0 text-[13px] border-l-2 border-gray-100 pl-2">
                <NavLink to="/report/overtime" className={({isActive}) => `block py-0.5 transition-colors ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900'}`}>For Approval Overtime</NavLink>
                <NavLink to="/report/leave"    className={({isActive}) => `block py-0.5 transition-colors ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900'}`}>For Approval Leave</NavLink>
                <NavLink to="/report/summary"  className={({isActive}) => `block py-0.5 transition-colors ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900'}`}>Summary of Attendance</NavLink>
              </div>
            </nav>

            <p className="text-[10px] text-gray-400 font-semibold mt-8 mb-4 ml-2">SETTINGS</p>
            <nav className="space-y-0.5">
              <SidebarLink to="/calendar"   icon={<Calendar size={18} />}     label="Calendar" />
              <SidebarLink to="/event-type" icon={<Tags size={18} />}         label="Event Type" />
              <SidebarLink to="/add-event"  icon={<CalendarPlus size={18} />} label="Add Event" />
            </nav>
          </div>
        </div>

        <div className="p-2 border-t border-gray-200 bg-white shrink-0">
          <div className="flex items-center gap-3 mb-1 px-2 pt-1">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-xs">GM</div>
            <div>
              <p className="font-bold text-xs leading-tight">John Doe</p>
              <p className="text-[9px] text-gray-500">Project Management Head</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
          </div>
          <nav className="space-y-0.5 px-2 pb-1">
            <SidebarLink to="/profile" icon={<User size={18} />}   label="Profile" />
            <SidebarLink to="/"        icon={<LogOut size={18} />} label="Log Out" />
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        <header className="h-16 bg-white flex items-center justify-between px-8 shrink-0 relative z-40">
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">{headerTitle}</h1>
          <div className="flex items-center gap-6">
            <LiveClock />
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="text-gray-600 hover:text-black transition-colors relative cursor-pointer p-1"
              >
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>

              {isNotificationOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsNotificationOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                      <h3 className="font-bold text-sm text-gray-800 tracking-tight">Notifications</h3>
                      <span className="text-[10px] bg-yellow-400 px-2 py-0.5 rounded-full font-bold">3 NEW</span>
                    </div>
                    <div className="max-h-[350px] overflow-y-auto">
                      <NotificationItem title="Revised Attendance Policy - Effective March 2026" time="2 hours ago" type="Policy" />
                      <NotificationItem title="Company Teambuilding - March 15, 2026"            time="5 hours ago" type="Event" />
                      <NotificationItem title="New Payroll Cut-off Schedule for Q2"              time="Yesterday"  type="Payroll" />
                    </div>
                    <button className="w-full py-3 text-xs text-gray-500 hover:text-black hover:bg-gray-50 transition-colors font-medium border-t border-gray-100 cursor-pointer">
                      View all notifications
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const formattedDate = time.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  return (
    <div className="text-gray-500 text-sm">
      {formattedDate} <span className="font-bold text-black ml-2">{formattedTime}</span>
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors ${
        isActive 
          ? 'bg-yellow-400 text-black font-semibold shadow-sm' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-black'
      }`
    }
  >
    {icon}
    <span className="text-sm">{label}</span>
  </NavLink>
);

const NotificationItem = ({ title, time, type }) => (
  <div className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors group">
    <div className="flex items-center gap-2 mb-1">
      <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${
        type === 'Policy' ? 'bg-blue-100 text-blue-600' : 
        type === 'Event'  ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
      }`}>{type}</span>
      <span className="text-[10px] text-gray-400 group-hover:text-gray-500">{time}</span>
    </div>
    <p className="text-sm text-gray-700 leading-snug group-hover:text-black transition-colors">{title}</p>
  </div>
);

export default Layout;
