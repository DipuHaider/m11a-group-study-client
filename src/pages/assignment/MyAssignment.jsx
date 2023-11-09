import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAssignmentCard from './MyAssignmentCard';

const MyAssignment = () => {

    const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadedAssignments);
    const {user} = useContext(AuthContext);

    const filteredAssignments = assignments.filter((assignment) => assignment.useremail === user.email);

    return (
        <div className="max-w-7xl mx-auto my-4">
            <div className='grid grid-cols-3 gap-3'>
                {filteredAssignments.length === 0 ? (
                    <div className="alert alert-error mt-4">
                        No Assignments found.
                    </div>
                    ) : (
                    filteredAssignments?.map(assignment => <MyAssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    ></MyAssignmentCard>)
                )}
            </div>
        </div>
    );
};

export default MyAssignment;