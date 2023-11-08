import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {

    const { _id, title, description, marks, thumbnail, level, duedate, useremail } = assignment;

    const {user} = useContext(AuthContext);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/assignment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your assignment has been deleted.',
                                'success'
                            )
                            const remaining = assignments.filter(cof => cof._id !== _id);
                            setAssignments(remaining);
                        }
                    })

            }
        })
    }

    return (
        <>
        <div className="card bg-base-100 shadow-xl hover:shadow-theme-primary">
            <figure className="px-10 pt-5">
                <img src={thumbnail} alt={title} className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center pt-2">
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{title}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{description}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{marks}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{level}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{duedate}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{useremail}</h2>

                <div className="btn-group btn-group-vertical space-y-4">
                    {/* <button className="btn">Details</button> */}
                    {_id}
                    <Link to={`/assignment/${_id}`}><button className="btn">Details</button></Link>
                    {
                        user ? <>
                            <Link to={`/updateassignment/${_id}`}><button className="btn">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
                        </>
                        : 
                        <></>
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default AssignmentCard;