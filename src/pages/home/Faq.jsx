const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 space-y-5">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl text-theme-light font-extralight mb-6">Faq</h2>
            </div>
            <div className="collapse bg-blue-50">
                <input type="radio" name="my-accordion-1" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    How can I join an online group study session?
                </div>
                <div className="collapse-content"> 
                    <p>To join an online group study session, you need to create an account on our platform (if you haven't already). After logging in, browse through the available study groups or create your own. Choose a group that matches your subject or topic of interest, and click "Join" or "Request to Join" to become a member. You can then participate in group discussions, schedule study sessions, and collaborate with other students.</p>
                </div>
                </div>
                <div className="collapse bg-blue-50">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    Can I create my own study group on the platform?
                </div>
                <div className="collapse-content"> 
                    <p>Absolutely! You can create your own study group on our platform. After logging in, go to your dashboard and look for the "Create Study Group" option. Provide details about your group, such as the subject, topic, and meeting schedule. Once your group is created, you can invite fellow students to join, set up study sessions, and share resources.</p>
                </div>
                </div>
                <div className="collapse bg-blue-50">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                    How can I communicate with other group members during study sessions?
                </div>
                <div className="collapse-content"> 
                    <p>During study sessions, you can use our built-in communication tools, such as chat rooms or video conferencing, to interact with other group members. Simply join the session at the scheduled time, and you'll be able to see and communicate with your peers. You can ask questions, share notes, and collaborate on assignments. Our platform provides a seamless and interactive environment for effective group study.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;