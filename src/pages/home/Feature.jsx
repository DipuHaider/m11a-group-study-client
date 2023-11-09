const Feature = () => {
    return (
        <div className="py-10 bg-blue-50">
            <div className="max-w-7xl mx-auto p-10 text-theme-primary">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-1/2 w-full">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-theme-light">Feature</h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-theme-primary">An Online Group Study platform provides students with a collaborative learning environment where they can engage in group study sessions, share knowledge, and work together on academic assignments and projects. It brings the concept of a physical study group to the digital realm, enabling students to connect and collaborate regardless of their physical locations.</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-theme-primary">Seamless Assignment Management:
                        One of the core functionalities of such a platform is the seamless management of assignments. Students can create, submit, update, and discuss assignments within their study groups. The platform often includes features for assignment.</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-theme-primary">Online Group Study platforms typically offer a resource-rich library where students can share and access study materials, such as lecture notes, presentations, textbooks, and practice exams. This shared knowledge repository ensures that valuable resources are readily available to all group members.</p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">Collaborative Study Spaces</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-xs">#Dedicated</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Create dedicated virtual study rooms or spaces within study groups where members can join to collaborate in real-time. These allow students to work on projects, discuss topics.</p>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5 h-auto bg-theme-light rounded-tl-md rounded-bl-md"></div>
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-slate-200">Peer Reviews</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-xs">#Evaluation</span></p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Implement a peer review system for assignments submitted by group members. Students can provide constructive feedback, review each other's work.</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">Resource Library</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-xs">#References</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Build a centralized repository where students can upload, share, and access study materials such as notes, slides, reference documents, and practice exams.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Feature;