import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const DetailAssignment = () => {

    const navigate = useNavigate();

    //Logged in user info
    const { user } = useContext(AuthContext);

    //Get data of assignment using loader data & destructure
    const assignment = useLoaderData();
    const { _id, title, description, marks, thumbnail, level, useremail } = assignment;

    //get taken status
    const [takenAssignments, setAssignments] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:5000/taken")
            .then((response) => response.json())
            .then((data) => {
                setAssignments(data);
            })
            .catch((error) => {
                console.error("Error fetching taken assignment data:", error);
            });
    }, []);

   //function to check if an assignment is taken
    const isAssignmentTaken = (_id, userEmail, takenAssignments) => {
        return takenAssignments.some(takenAssignment => {
        return takenAssignment.assignmentid === _id && takenAssignment.assignmentTaker === user.email;
        });
    };
    const isTaken = isAssignmentTaken(_id, user.email, takenAssignments);
    console.log(isTaken);

    const handleTaken = (pdflink, note)  => {
    
        const assignmentid = _id;
        const assignmentName = title;
        const assignmentOwner = useremail;
        const assignmentTaker = user.email;
        const assignmentStatus = "pending";
        const assignmentPdfLink = pdflink;
        const assignmentNote = note;
        const assignmentMarks = 0;


        console.log(assignmentPdfLink)


        const addedAssignment = { assignmentid, assignmentName, assignmentOwner, assignmentTaker, assignmentStatus, assignmentPdfLink, assignmentNote, assignmentMarks }

        fetch('http://localhost:5000/taken', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Taken Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        setTimeout(() => {
                navigate('/allassignment');
            }, 2000);
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto m-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='max-w-lg'><img className="px-10 pt-10" src={thumbnail} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-theme-primary pb-5">{title}</h2>
                    <div className='space-y-2 py-2'>
                        <p className="justify-start text-lg text-slate-900">{level}</p>
                        <p className="justify-start text-lg text-slate-900">{marks}</p>
                        <p className="justify-start text-base text-slate-900">{description}</p>
                        

                        {
                            isTaken ? <>
                                <h4 className='text-red-500'>Assignment taken already</h4>
                                <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()} disabled>Take Assignment</button>
                                </>
                            : 
                            <>
                                <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                            </>
                        }

                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault(); // Prevent the default form submission
                                        const pdflink = e.target.pdflink.value;
                                        const note = e.target.note.value;
                                        handleTaken(pdflink, note); // Call your handleTaken function
                                    }}
                                    className="space-y-2"
                                    >
                                <div>
                                    <label className="label">
                                        <span className="text-base label-text">PDF Link</span>
                                    </label>
                                    <input type="text" name="pdflink" placeholder="title" className="w-full input input-bordered input-primary border-theme-primary" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base label-text">Assignment Note</span>
                                    </label>
                                    <input type="text" name="note" placeholder="note" className="w-full input input-bordered input-primary border-theme-primary" />
                                </div>
                                <div>
                                    <button onClick={() => { const modal = document.getElementById('my_modal_3'); modal.close(); }} className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Take Assignment</button>
                                </div>
                            </form>
                        </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailAssignment;