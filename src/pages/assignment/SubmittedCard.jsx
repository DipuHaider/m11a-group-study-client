
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SubmittedCard = ({submit, submits, setSubmits}) => {

    const {user} = useContext(AuthContext);
    
    const { _id, assignmentid, assignmentName, assignmentOwner, assignmentTaker, assignmentStatus, assignmentPdfLink, assignmentNote } = submit;

    const handleMark = (mark, note)  => {

        const assignmentStatus = "marked";
        const assignmentNote = note;
        const assignmentMarks = mark;


        const updatedTaken = { assignmentStatus, assignmentNote, assignmentMarks }

        fetch(`http://localhost:5000/updatetaken/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTaken)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Taken Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl hover:shadow-theme-primary py-4">
            
            <div className="card-body items-center text-center pt-2">
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{assignmentName}</h2>
                <h2 className="card-title justify-center text-base text-theme-text70 ">{assignmentStatus}</h2>
                <h2 className="card-title justify-center text-base text-theme-text70 ">{assignmentPdfLink}</h2>
                <h2 className="card-title justify-center text-base text-theme-text70 ">{assignmentNote}</h2>


                <div className="btn-group btn-group-vertical space-y-4">

                    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Mark Assignment</button>
                            
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault(); // Prevent the default form submission
                                        const mark = e.target.mark.value;
                                        const note = e.target.note.value;
                                        handleMark(mark, note); // Call your handleTaken function
                                    }}
                                    className="space-y-2"
                                    >
                                <div>
                                    <label className="label">
                                        <span className="text-base label-text">Mark</span>
                                    </label>
                                    <input type="number" name="mark" placeholder="mark" className="w-full input input-bordered input-primary border-theme-primary" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base label-text">Feedback</span>
                                    </label>
                                    <input type="text" name="note" placeholder="feedback" className="w-full input input-bordered input-primary border-theme-primary" />
                                </div>
                                <div>
                                    <button onClick={() => { const modal = document.getElementById('my_modal_3'); modal.close(); }} className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Mark Assignment</button>
                                </div>
                            </form>
                        </div>
                        </dialog>
                </div>
            </div>
        </div>
    );
};

export default SubmittedCard;
