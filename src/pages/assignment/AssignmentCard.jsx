import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment }) => {

    const { _id, title, description, marks, thumbnail, level, duedate, useremail } = assignment;

    return (
        <>
        <NavLink to={`assignment/${_id}`}>

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
            </div>
        </div>
        </NavLink>
        </>
    );
};

export default AssignmentCard;