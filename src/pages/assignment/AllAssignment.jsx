import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentCard from './AssignmentCard';

const AllAssignment = () => {

    
    const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadedAssignments);

    const [activeTab, setActiveTab] = useState("Medium"); // Set the default tab

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.level === activeTab
  );

//   const levels = ["Easy", "Medium", "Hard"];
//   const levels = assignments.map((assignment) => assignment.level);
const levels = Array.from(new Set(assignments.map((assignment) => assignment.level)));

    return (
        <div className="max-w-7xl mx-auto my-4">
            <div className="space-x-2 py-8">
                {levels.map((level) => (
                <button
                    key={level}
                    className={`btn ${
                    activeTab === level ? "btn-active" : "text-base bg-transparent hover:bg-text-theme-light text-theme-light hover:text-theme-primary rounded shadow hover:shadow-sm py-2 px-4 border border-none hover:border-white"
                    }`}
                    onClick={() => setActiveTab(level)}
                >
                    {level}
                </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-8">
                {filteredAssignments.map((assignment) => (
                <AssignmentCard
                    key={assignment._id}
                    assignment={assignment}
                    assignments={assignments}
                    setAssignments={setAssignments}
                ></AssignmentCard>
                ))}
            </div>
        </div>

        // <div className="max-w-7xl mx-auto my-4">
        //         <div className='grid grid-cols-3 gap-3'>
        //             {
        //                 assignments?.map(assignment => <AssignmentCard
        //                     key={assignment._id}
        //                     assignment={assignment}
        //                     assignments={assignments}
        //                     setAssignments={setAssignments}
        //                 ></AssignmentCard>)
        //             }
        //         </div>
        //     </div>
    );
};

export default AllAssignment;