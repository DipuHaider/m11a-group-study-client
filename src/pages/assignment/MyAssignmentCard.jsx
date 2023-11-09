import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyAssignmentCard = ({ assignment, assignments, setAssignments }) => {

    const { _id, title, description, marks, thumbnail, level, duedate, useremail } = assignment;

    const {user} = useContext(AuthContext);
    return (
        <>
        <div className="card card-side bg-base-100 shadow-xl hover:shadow-theme-primary">
            <figure className="px-10 pt-5">
                <img src={thumbnail} alt={title} className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center pt-2">
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{title}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{description}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{marks}</h2>
                {/* <h2 className="card-title justify-center text-2xl text-theme-primary ">{level}</h2>
                <h2 className="card-title justify-center text-2xl text-theme-primary ">{duedate}</h2> */}

                <div className="btn-group btn-group-vertical space-y-4">

                    <Link to={`/assignment/${_id}`}><button className="btn">Details</button></Link>
                    {
                        user ? <>
                            {/* <Link to={`/updateassignment/${_id}`}><button className="btn">Update</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button> */}
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

export default MyAssignmentCard;