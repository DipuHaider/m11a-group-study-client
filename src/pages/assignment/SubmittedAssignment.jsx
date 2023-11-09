import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SubmittedCard from './SubmittedCard';

const SubmittedAssignment = () => {

    const loadedSubmits = useLoaderData();
    const [submits, setSubmits] = useState(loadedSubmits);
    const {user} = useContext(AuthContext);

    const filteredSubmits = submits.filter((submit) => submit.assignmentStatus === "pending");

    return (
        <div className="max-w-7xl mx-auto py-4">
            <div className='grid grid-cols-3 gap-3'>
                {filteredSubmits.length === 0 ? (
                    <div className="alert alert-error mt-4">
                        No Assignments found.
                    </div>
                    ) : (
                    filteredSubmits?.map(submit => <SubmittedCard
                        key={submit._id}
                        submit={submit}
                        submits={submits}
                        setSubmits={setSubmits}
                    ></SubmittedCard>)
                )}
            </div>
        </div>
    );
};

export default SubmittedAssignment;
