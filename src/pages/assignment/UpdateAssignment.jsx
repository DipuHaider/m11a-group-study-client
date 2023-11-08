import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {

    const assignment = useLoaderData();
    const { _id, title, description, marks, thumbnail, level } = assignment;

    const handleUpdateAssignment = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnail = form.thumbnail.value;
        const level = form.level.value;
        // const duedate = form.duedate.value;

        const updatedAssignment = { title, description, marks, thumbnail, level}

        console.log(updatedAssignment);

        fetch(`http://localhost:5000/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto my-5 p-2">
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-theme-primary">Update Assignment</h1>
                    <form onSubmit={handleUpdateAssignment}  className="space-y-2">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Assignment Title</span>
                            </label>
                            <input type="text" name="title"  defaultValue={title} className="w-full input input-bordered input-primary border-theme-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Description</span>
                            </label>
                            <div className="mt-2">
                                <textarea name="description" rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-theme-primary placeholder:text-gray-400  sm:text-sm sm:leading-6 border-theme-primary" defaultValue={description}></textarea>
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
                                    defaultValue={marks}
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
                                <input type="text" name="thumbnail" defaultValue={thumbnail} className="w-full input input-bordered input-primary border-theme-primary" />
                            </div>
                        </div>
                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Difficulty Level</span>
                                </label>
                                <select name="level" value={level}  className="select select-bordered border-theme-primary w-full max-w-xs">
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="text-base label-text">Due Date</span>
                                </label>
                                {/* <DatePicker name="duedate" selected={startDate} onChange={(date) => setStartDate(date)}  className="select select-bordered border-theme-primary w-full max-w-xs"/> */}
                            </div>
                            
                        </div>

                        <div>
                            <input type="submit" value="Update Assignment" className="btn btn-block bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;