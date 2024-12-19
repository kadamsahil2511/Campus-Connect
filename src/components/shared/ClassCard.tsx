import React, { useState } from 'react';
import { Clock, MapPin, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { Class } from '../../types';
import { CurriculumProgress } from './CurriculumProgress';
import { ClassRemarks } from './ClassRemarks';

interface ClassCardProps {
  class_: Class;
  showStatus?: boolean;
}

function ClassStatusBadge({ status }: { status: Class['status'] }) {
  const statusConfig = {
    ongoing: { color: 'bg-green-400', text: 'Ongoing' },
    upcoming: { color: 'bg-blue-400', text: 'Upcoming' },
    completed: { color: 'bg-gray-400', text: 'Completed' },
    cancelled: { color: 'bg-red-400', text: 'Cancelled' }
  };

  const config = statusConfig[status];

  return (
    <span className={`${config.color} text-black text-xs px-2 py-1 rounded-full font-medium`}>
      {config.text}
    </span>
  );
}

export function ClassCard({ class_, showStatus = false }: ClassCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleAddRemark = (text: string) => {
    // In a real app, this would make an API call
    console.log('Adding remark:', text);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold">{class_.name}</h4>
            {showStatus && <ClassStatusBadge status={class_.status} />}
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>{class_.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Room {class_.room}</span>
            </div>
          </div>
        </div>
        {class_.curriculum && (
          <div className="flex items-center">
            <div className="text-right mr-2">
              <span className="text-lg font-bold">{class_.curriculum.progress}%</span>
              <p className="text-xs text-gray-400">Complete</p>
            </div>
            {expanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        )}
      </div>

      {expanded && (
        <div className="mt-4 space-y-6">
          {class_.curriculum && (
            <div className="pt-4 border-t border-gray-700">
              <CurriculumProgress curriculum={class_.curriculum} />
            </div>
          )}
          
          <div className="pt-4 border-t border-gray-700">
            <ClassRemarks 
              remarks={class_.remarks || []}
              onAddRemark={handleAddRemark}
            />
          </div>
        </div>
      )}
    </div>
  );
}