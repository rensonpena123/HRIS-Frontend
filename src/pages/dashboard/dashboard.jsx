import React from 'react';
import StatCard from '../../components/statCard';

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-10">
      
      {/* 1. Top Hero Section: Welcome + Quick Attendance */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center gap-0">
        
        {/* Left Section: User Welcome */}
        <div className="flex-1 flex gap-6 items-center border-r-2 border-gray-300 pr-12 h-full py-2">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-[#FBC02D] font-bold text-2xl shrink-0 shadow-sm">
            GM
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">John Doe</h2>
              <p className="text-xs text-gray-400 font-medium">johndoe@highlysucceed.com</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-[#00C853] text-white text-[10px] font-bold px-4 py-1.5 rounded-md flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div> Active
              </span>
              <span className="bg-[#E0E0E0] text-[#424242] text-[10px] font-bold px-4 py-1.5 rounded-md">
                Period: 4 Months & 4 Days
              </span>
              <span className="bg-[#E0E0E0] text-[#424242] text-[10px] font-bold px-4 py-1.5 rounded-md">
                Hired: Oct 26, 2025
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Quick Attendance*/}
        <div className="lg:w-[550px] flex items-center pl-12 py-2">
          <div className="w-full flex items-center justify-between">
            
            {/* Left side of the right section: Text info */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                  Today's Attendance - Monday, March 02
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#D32F2F] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Not yet logged in</h3>
                </div>
                <p className="text-[11px] text-gray-500">
                  Click <span className="font-bold text-gray-700">TIME IN</span> to record your time-in
                </p>
              </div>

              {/* Attendance Details Grid */}
              <div className="flex gap-10 pt-1">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Time In</p>
                  <p className="text-sm font-bold text-gray-300">-- : --</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Time Out</p>
                  <p className="text-sm font-bold text-gray-300">-- : --</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Hours Rendered</p>
                  <p className="text-sm font-bold text-gray-900">0h 0m</p>
                </div>
              </div>
            </div>

            {/* Right side of the right section: The Button */}
            <button className="bg-[#FFB300] hover:bg-[#FFA000] text-white px-8 py-3.5 rounded-2xl font-bold text-[11px] uppercase shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0 ml-4">
              Time In Now
            </button>
            
          </div>
        </div>
      </div>

      {/* Stat Cards Row  */}
      <div className="grid grid-cols-4 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <StatCard value="0" label="Available Leave Credits" description="2026 Allocation" />
        <StatCard value="0" label="Days Present This Month" description="March 2026" />
        <StatCard value="0" label="Overtime This Month" description="Pending Approval" />
        <StatCard value="0" label="Pending Tasks" description="Due This Week: 2" />
      </div>

      {/*  Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Announcements & Events (70%) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Announcements */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Announcements</h3>
              <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">3 New</span>
            </div>
            <div className="divide-y divide-gray-50">
              <AnnouncementItem title="Revised Attendance Policy - Effective March 2026" date="Feb 28, 2026 - HR Department" tag="Policy" />
              <AnnouncementItem title="Company Teambuilding - March 15, 2026" date="Feb 23, 2026 - Admin" tag="Event" />
              <AnnouncementItem title="New Payroll Cut-off Schedule for Q2" date="Feb 20, 2026 - Payroll" tag="Payroll" />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Upcoming Events</h3>
              <span className="text-[10px] text-gray-400 font-bold uppercase">March</span>
            </div>
            <div className="p-4 space-y-4">
              <EventItem day="08" month="MAR" title="International Women's Day" subtitle="NATIONAL HOLIDAY" />
              <EventItem day="15" month="MAR" title="Company Team Building" subtitle="Company Event" dark />
              <EventItem day="21" month="MAR" title="End of Payroll Cut-Off" subtitle="Payroll" />
              <EventItem day="31" month="MAR" title="Q1: HR Performance Review" subtitle="HR Event" />
            </div>
          </div>
        </div>

        {/* Right Column: Leave & OT Summary (30%) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 2026 Leave Credits */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">2026 Leave Credits</h3>
              <span className="text-[10px] border border-gray-200 px-2 py-0.5 rounded text-gray-400 font-bold">Active</span>
            </div>
            <div className="space-y-6">
              <LeaveProgress label="Vacation Leave" used="0" total="15" />
              <LeaveProgress label="Sick Leave" used="0" total="15" />
              <LeaveProgress label="Emergency Leave" used="0" total="3" />
              <div className="flex justify-between pt-4 border-t border-gray-50 text-[10px] font-bold text-gray-400 uppercase">
                <span>Available Credits: 0</span>
                <span>Usable Credits: 0</span>
              </div>
            </div>
          </div>

          {/* Overtime Summary */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Overtime Summary</h3>
              <span className="text-[10px] border border-gray-200 px-2 py-0.5 rounded text-gray-400 font-bold">March 2026</span>
            </div>
            <div className="p-4 space-y-4">
              <SummaryRow label="Total Filed OT" value="0h 0m" />
              <SummaryRow label="Approved OT" value="0h 0m" />
              <SummaryRow label="Pending Approval" value="0" />
              <SummaryRow label="Rejected" value="0" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Internal Helper Components --- */

const AnnouncementItem = ({ title, date, tag }) => (
  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="flex items-start gap-3">
      <div className="w-1 h-12 bg-gray-200 group-hover:bg-yellow-400 transition-colors rounded-full"></div>
      <div>
        <h4 className="text-sm font-bold text-gray-800 group-hover:text-black">{title}</h4>
        <p className="text-[11px] text-gray-400 font-medium mt-1">{date}</p>
        <span className="inline-block mt-2 text-[9px] font-bold border border-gray-200 px-2 py-0.5 rounded text-gray-500 uppercase">{tag}</span>
      </div>
    </div>
  </div>
);

const EventItem = ({ day, month, title, subtitle, dark }) => (
  <div className="flex items-center gap-4">
    <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center border ${dark ? 'bg-black border-black text-white' : 'bg-white border-gray-100 text-gray-400'}`}>
      <span className="text-lg font-bold leading-none">{day}</span>
      <span className="text-[9px] font-bold">{month}</span>
    </div>
    <div>
      <h4 className="text-sm font-bold text-gray-800">{title}</h4>
      <p className="text-[10px] text-gray-400 font-bold uppercase">{subtitle}</p>
    </div>
  </div>
);

const LeaveProgress = ({ label, used, total }) => (
  <div>
    <div className="flex justify-between text-[11px] font-bold mb-2">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-400">{used}/{total} days</span>
    </div>
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div className="bg-gray-300 h-full rounded-full" style={{ width: `${(used/total)*100}%` }}></div>
    </div>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">{label}</span>
    <span className="text-sm font-bold text-gray-800">{value}</span>
  </div>
);

export default Dashboard;