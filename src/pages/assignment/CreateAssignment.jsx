import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';

   

const CreateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext);

    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnail = form.thumbnail.value;
        const level = form.level.value;
        const duedate = form.duedate.value;
        const useremail = user.email;


        const newAssignment = { title, description, marks, thumbnail, level, duedate, useremail}

        console.log(newAssignment);

        // send data to the server
        fetch('http://localhost:5000/assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

        form.reset();
    }
    return (
        <div className="max-w-7xl mx-auto my-5 p-2">
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-theme-primary">Create Assignment</h1>
                    <form onSubmit={handleCreateAssignment}  className="space-y-2">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Assignment Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Description</span>
                            </label>
                            <div className="mt-2">
                                <textarea name="description" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-theme-primary placeholder:text-gray-400  sm:text-sm sm:leading-6 border-theme-primary" placeholder="Description"></textarea>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Marks</span>
                                </label>
                                <input
                                    type="number"
                                    name="marks"
                                    placeholder="Marks 0 to 100"
                                    className="w-full input input-bordered input-primary border-theme-primary"
                                    min="0"
                                    max="100"
                                    step="1"
                                />
                            </div>
                            <div className="flex-1">
                            <label className="label">
                                <span className="text-base label-text">Thumbnail</span>
                            </label>
                                <input type="text" name="thumbnail" placeholder="Thumbnail" className="w-full input input-bordered input-primary border-theme-primary" />
                            </div>
                        </div>
                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Difficulty Level</span>
                                </label>
                                <select name="level" className="select select-bordered border-theme-primary w-full max-w-xs">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Due Date</span>
                                </label>
                                <DatePicker name="duedate" selected={startDate} onChange={(date) => setStartDate(date)}  className="select select-bordered border-theme-primary w-full max-w-xs"/>
                            </div>
                            
                        </div>

                        
                        
                        <div>
                            <button className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Create Assignment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;