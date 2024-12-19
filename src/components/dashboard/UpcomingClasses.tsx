import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { useClasses } from '../../hooks/useClasses';
import { ClassCard } from '../shared/ClassCard';

export function UpcomingClasses() {
  const { upcomingClasses } = useClasses();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
      <div className="space-y-4">
        {upcomingClasses.map((class_) => (
          <ClassCard key={class_.id} class_={class_} />
        ))}
      </div>
    </div>
  );
}