const Banner = () => {

    const bannerImage = "https://i.ibb.co/SR5GTYZ/banner-image.jpg";

    return (
        <div className="hero min-h-[600px] shadow-theme-primary shadow-inner bg-slate-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-sm rounded-lg " />
                <div>
                <h1 className="text-5xl font-thin text-theme-txt70">Amazing Assignments!!!</h1>
                <p className="py-6 text-2xl font-normal text-theme-txt50">Join our dynamic online group study community for collaborative learning and academic excellence. Connect, share, and thrive together!</p>
                <button className="btn btn-primary bg-theme-primary border-theme-primary text-white hover:bg-white hover:text-theme-primary hover:border-theme-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

