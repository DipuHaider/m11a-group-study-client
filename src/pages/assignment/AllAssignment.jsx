import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentCard from './AssignmentCard';

const AllAssignment = () => {

    
    const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadedAssignments);

    return (
        <div className="max-w-7xl mx-auto my-4">
                <div className='grid grid-cols-3 gap-3'>
                    {
                        assignments?.map(assignment => <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                            assignments={assignments}
                            setAssignments={setAssignments}
                        ></AssignmentCard>)
                    }
                </div>
            </div>
    );
};

export default AllAssignment;