import { useLoaderData } from 'react-router-dom';

const DetailAssignment = () => {

    const assignment = useLoaderData();
    const { _id, title, description, marks, thumbnail, level } = assignment;

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
                        {/* <p><button onClick={() => handleAddCart(name)} className="btn btn-md bg-theme-primary text-white hover:text-theme-primary hover:bg-blue-200 hover:border-theme-primary">Add To Cart</button></p> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailAssignment;