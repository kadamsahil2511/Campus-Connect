import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { ClassRemark } from '../../types';

interface ClassRemarksProps {
  remarks: ClassRemark[];
  onAddRemark: (text: string) => void;
}

export function ClassRemarks({ remarks, onAddRemark }: ClassRemarksProps) {
  const [newRemark, setNewRemark] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRemark.trim()) {
      onAddRemark(newRemark.trim());
      setNewRemark('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-gray-400">
        <MessageSquare className="w-4 h-4" />
        <h4 className="font-medium text-sm">Class Remarks</h4>
      </div>

      <div className="space-y-3">
        {remarks.map(remark => (
          <div key={remark.id} className="bg-gray-800/50 rounded-lg p-3">
            <p className="text-sm mb-2">{remark.text}</p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>{remark.author}</span>
              <span>{new Date(remark.timestamp).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newRemark}
          onChange={(e) => setNewRemark(e.target.value)}
          placeholder="Add a remark..."
          className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm 
                   border border-gray-700 focus:outline-none focus:border-white"
        />
        <button
          type="submit"
          className="p-2 bg-white text-black rounded-lg hover:bg-gray-100"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
} 