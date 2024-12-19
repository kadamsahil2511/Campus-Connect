import React from 'react';
import { Clock, MapPin, Radio } from 'lucide-react';
import { Class } from '../../types';
import { useClasses } from '../../hooks/useClasses';

export function OngoingClass() {
  const { ongoingClass } = useClasses();

  if (!ongoingClass) return null;

  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-red-400 animate-pulse" />
          <h3 className="text-lg font-semibold">Ongoing Class</h3>
        </div>
        <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
          Live Now
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-semibold mb-1">{ongoingClass.name}</h4>
          <p className="text-gray-400">{ongoingClass.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{ongoingClass.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4" />
            <span>Room {ongoingClass.room}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-gray-400">
            Instructor: {ongoingClass.instructor}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg 
                           transition-colors text-sm font-medium">
            Join Class
          </button>
        </div>
      </div>
    </div>
  );
} 