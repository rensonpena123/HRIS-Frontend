import React from 'react';
import { Plus, ChevronDown, Edit2, CheckCircle2, Clock } from 'lucide-react';
import StatCard from '../../components/statCard';

const Tasks = () => {
  return (
    <div className="space-y-4 pb-10">
      
      {/* 1. Header Section */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">My Task Board</h2>
          <p className="text-sm text-gray-400 font-medium mt-1">Your assign tasks and personal to-dos — John Doe</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer">
              <option>All Tasks</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-all cursor-pointer">
            <Plus size={18} /> New Task
          </button>
        </div>
      </div>

      {/* 2. Stat Cards Row (Using your StatCard component) */}
      <div className="grid grid-cols-4 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <StatCard value="3" label="TO DO" description="Not Yet Started" />
        <StatCard value="2" label="IN PROGRESS" description="Currently Working" />
        <StatCard value="4" label="COMPLETED" description="This Month" />
        <StatCard value="1" label="OVERDUE" description="Post Due Date" />
      </div>

      {/* 3. Kanban Board Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* TO DO COLUMN */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">To Do</h3>
          </div>
          <div className="p-4 space-y-4">
            <TaskCard 
              priority="High Priority" 
              priorityColor="text-red-600"
              title="Submit Q1 Project Report" 
              desc="Compile all Q1 deliverables and submit to direct manage for review"
              dueDate="March 05, 2026"
              isOverdue
            />
            <TaskCard 
              priority="Medium Priority" 
              priorityColor="text-yellow-600"
              title="Submit Q1 Project Report" 
              desc="Compile all Q1 deliverables and submit to direct manage for review"
              dueDate="March 05, 2026"
            />
             <TaskCard 
              priority="Low Priority" 
              priorityColor="text-green-600"
              title="Submit Q1 Project Report" 
              desc="Compile all Q1 deliverables and submit to direct manage for review"
              dueDate="March 05, 2026"
            />
          </div>
        </div>

        {/* IN PROGRESS COLUMN */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">In Progress</h3>
          </div>
          <div className="p-4 space-y-4">
            <TaskCard 
              priority="High Priority" 
              priorityColor="text-red-600"
              indicator="bg-red-600"
              title="Submit Q1 Project Report" 
              desc="Compile all Q1 deliverables and submit to direct manage for review"
              dueDate="March 15, 2026"
              inProgress
            />
            <TaskCard 
              priority="Medium Priority" 
              priorityColor="text-yellow-600"
              indicator="bg-yellow-500"
              title="Submit Q1 Project Report" 
              desc="Compile all Q1 deliverables and submit to direct manage for review"
              dueDate="March 20, 2026"
              inProgress
            />
          </div>
        </div>

        {/* COMPLETED COLUMN */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Completed</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <CompletedItem title="Review Company Handbook" date="Feb 28, 2026" />
            <CompletedItem title="Meet with HR Orientation" date="Nov 05, 2025" />
            <CompletedItem title="Sign Employment Contract" date="Oct 26, 2025" />
            <CompletedItem title="Submit 201 File Requirements" date="Oct 21, 2025" />
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Internal Helper Components --- */

const TaskCard = ({ priority, priorityColor, title, desc, dueDate, isOverdue, inProgress, indicator }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden flex relative group">
    {/* Colored Side Indicator for In Progress */}
    {indicator && <div className={`w-1.5 ${indicator} shrink-0`}></div>}
    
    <div className="p-4 flex-1 space-y-3">
      <div className="flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full ${priorityColor.replace('text', 'bg')}`}></div>
        <span className={`text-[10px] font-bold uppercase ${priorityColor}`}>{priority}</span>
      </div>
      
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{desc}</p>
      </div>

      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 font-bold">
          Due: <span className={isOverdue ? 'text-red-600' : 'text-gray-500'}>{dueDate}</span>
          {isOverdue && <span className="ml-2 bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[8px] uppercase">● Overdue</span>}
        </p>
        <p className="text-[9px] text-gray-400">Assigned by: Maria Santos (HR Manager)</p>
      </div>

      <div className="flex gap-2 pt-1">
        <button className="flex-1 py-1.5 border border-gray-100 bg-gray-50 text-gray-400 text-[9px] font-bold rounded uppercase cursor-not-allowed">
          {inProgress ? 'Mark Complete' : 'Mark in Progress'}
        </button>
        <button className="px-3 py-1.5 border border-gray-100 bg-gray-50 text-gray-400 rounded cursor-not-allowed">
          <Edit2 size={12} />
        </button>
      </div>
    </div>
  </div>
);

const CompletedItem = ({ title, date }) => (
  <div className="p-4 hover:bg-gray-50 transition-colors cursor-default">
    <h4 className="text-sm font-bold text-gray-400 mb-1">{title}</h4>
    <p className="text-[10px] text-gray-300 font-medium tracking-tight">Completed — {date}</p>
  </div>
);

export default Tasks;