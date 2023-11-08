import { useLoaderData } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const DetailAssignment = () => {

    const { user } = useContext(AuthContext);

    const assignment = useLoaderData();
    const { _id, title, description, marks, thumbnail, level, useremail } = assignment;

    const handleTaken = title  => {
    
        const form = title.target;

        const assignmentName = title;
        const assignmentOwner = useremail;
        const assignmentTaker = user.email;
        const assignmentStatus = "pending";
        const assignmentPdfLink = form.pdflink.value;
        const assignmentNote = useremail;


        const addedAssignmnent = { assignmentName, assignmentOwner, assignmentTaker, assignmentStatus, assignmentPdfLink, assignmentNote }

        fetch('http://localhost:5000/taken', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedAssignmnent)
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
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto m-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="px-10 pt-10" src={thumbnail} alt={title}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-theme-primary pb-5">{title}</h2>
                    <div className='space-y-2 py-2'>
                        <p className="justify-start text-lg text-slate-900">{level}</p>
                        <p className="justify-start text-lg text-slate-900">${marks}</p>
                        <p className="justify-start text-base text-slate-900">{description}</p>
                        <p><button onClick={() => handleTaken(title)} className="btn btn-md bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Take Assignment</button></p>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleTaken}  className="space-y-2">
        <div>
            <label className="label">
                <span className="text-base label-text">Assignment Title</span>
            </label>
            <input type="text" name="pdflink" placeholder="title" className="w-full input input-bordered input-primary border-theme-primary" />
        </div>
        <div>
            <button className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Take Assignment</button>
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