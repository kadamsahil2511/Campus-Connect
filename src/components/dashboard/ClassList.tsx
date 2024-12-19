import React, { useMemo } from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { Class } from '../../types';
import { ClassCard } from '../shared/ClassCard';

interface ClassListProps {
  classes: Class[];
}

export function ClassList({ classes }: ClassListProps) {
  const sortedClasses = useMemo(() => {
    const now = new Date();
    
    const categorizedClasses = classes.reduce((acc, class_) => {
      const startTime = new Date(class_.startTime);
      const endTime = new Date(class_.endTime);
      
      if (now >= startTime && now <= endTime) {
        acc.ongoing.push(class_);
      } else if (now < startTime) {
        acc.upcoming.push(class_);
      } else {
        acc.past.push(class_);
      }
      
      return acc;
    }, {
      ongoing: [] as Class[],
      upcoming: [] as Class[],
      past: [] as Class[]
    });

    return {
      ...categorizedClasses,
      upcoming: categorizedClasses.upcoming.sort((a, b) => 
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      ),
      past: categorizedClasses.past.sort((a, b) => 
        new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
      )
    };
  }, [classes]);

  return (
    <div className="space-y-6">
      {sortedClasses.ongoing.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold">Ongoing Classes</h3>
          </div>
          <div className="space-y-4">
            {sortedClasses.ongoing.map(class_ => (
              <ClassCard 
                key={class_.id} 
                class_={class_}
                showStatus
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
        <div className="space-y-4">
          {sortedClasses.upcoming.map(class_ => (
            <ClassCard 
              key={class_.id} 
              class_={class_}
              showStatus
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Past Classes</h3>
        <div className="space-y-4">
          {sortedClasses.past.map(class_ => (
            <ClassCard 
              key={class_.id} 
              class_={class_}
              showStatus
            />
          ))}
        </div>
      </section>
    </div>
  );
} 