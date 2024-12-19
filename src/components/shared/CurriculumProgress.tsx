import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Curriculum } from '../../types';
import { CourseMaterialModal } from '../course/CourseMaterialModal';

interface CurriculumProgressProps {
  curriculum: Curriculum;
}

export function CurriculumProgress({ curriculum }: CurriculumProgressProps) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-sm">Course Progress</h4>
        <span className="text-sm text-gray-400">
          {curriculum.completedTopics}/{curriculum.totalTopics} topics
        </span>
      </div>
      
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${curriculum.progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {curriculum.topics.map(topic => (
          <div 
            key={topic.id}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 
                      cursor-pointer transition-colors"
            onClick={() => setSelectedTopic(topic)}
          >
            <div className="flex items-center space-x-2">
              {topic.completed ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : (
                <Circle className="w-4 h-4 text-gray-400" />
              )}
              <span className={`text-sm ${topic.completed ? 'text-gray-300' : 'text-white'}`}>
                {topic.title}
              </span>
            </div>
            <span className="text-xs text-gray-400">{topic.duration}</span>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <CourseMaterialModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );
} 