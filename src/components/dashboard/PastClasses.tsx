import React from 'react';
import { usePastClasses } from '../../hooks/usePastClasses';
import { ClassCard } from '../shared/ClassCard';

export function PastClasses() {
  const { pastClasses } = usePastClasses();

  if (pastClasses.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Past Classes</h3>
      <div className="space-y-4">
        {pastClasses.map(class_ => (
          <ClassCard 
            key={class_.id} 
            class_={class_}
            showStatus
          />
        ))}
      </div>
    </div>
  );
}