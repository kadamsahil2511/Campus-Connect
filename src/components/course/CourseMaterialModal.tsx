import React from 'react';
import { 
  X, FileText, Video, Link, Download, ExternalLink, 
  Clock, Calendar, CheckCircle 
} from 'lucide-react';
import { Topic, CourseMaterial } from '../../types';

interface CourseMaterialModalProps {
  topic: Topic;
  onClose: () => void;
}

function MaterialTypeIcon({ type }: { type: CourseMaterial['type'] }) {
  switch (type) {
    case 'video':
      return <Video className="w-5 h-5 text-blue-400" />;
    case 'pdf':
      return <FileText className="w-5 h-5 text-red-400" />;
    case 'quiz':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    default:
      return <Link className="w-5 h-5 text-purple-400" />;
  }
}

function ResourceItem({ resource }: { resource: CourseResource }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
      <div className="flex items-center gap-3">
        {resource.type === 'pdf' ? (
          <FileText className="w-5 h-5 text-red-400" />
        ) : resource.type === 'video' ? (
          <Video className="w-5 h-5 text-blue-400" />
        ) : (
          <Link className="w-5 h-5 text-purple-400" />
        )}
        <div>
          <p className="font-medium text-sm">{resource.name}</p>
          {resource.size && (
            <span className="text-xs text-gray-400">{resource.size}</span>
          )}
        </div>
      </div>
      <button 
        onClick={() => window.open(resource.url, '_blank')}
        className="p-2 hover:bg-gray-700 rounded-full transition-colors"
      >
        {resource.type === 'link' ? (
          <ExternalLink className="w-4 h-4" />
        ) : (
          <Download className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

function MaterialCard({ material }: { material: CourseMaterial }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
      <div className="flex items-start gap-3">
        <MaterialTypeIcon type={material.type} />
        <div className="flex-1">
          <h4 className="font-medium mb-1">{material.title}</h4>
          <p className="text-sm text-gray-400">{material.description}</p>
        </div>
      </div>

      {(material.duration || material.deadline) && (
        <div className="flex gap-4 text-sm text-gray-400">
          {material.duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{material.duration}</span>
            </div>
          )}
          {material.deadline && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Due: {new Date(material.deadline).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      )}

      {material.resources.length > 0 && (
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-gray-300">Resources</h5>
          <div className="space-y-2">
            {material.resources.map(resource => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      )}

      {material.url && (
        <button 
          onClick={() => window.open(material.url, '_blank')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg 
                     transition-colors text-sm font-medium"
        >
          {material.type === 'quiz' ? 'Start Quiz' : 
           material.type === 'assignment' ? 'View Assignment' : 
           `View ${material.type.charAt(0).toUpperCase() + material.type.slice(1)}`}
        </button>
      )}
    </div>
  );
}

export function CourseMaterialModal({ topic, onClose }: CourseMaterialModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative mt-16 w-full max-w-lg mx-4 bg-gray-900/95 rounded-xl shadow-2xl 
                      border border-gray-800 backdrop-blur-md overflow-hidden">
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 
                      p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="text-sm text-gray-400">Course Materials</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
          <div className="space-y-4">
            {topic.materials?.map(material => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 