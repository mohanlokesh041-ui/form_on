import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [tempUser, setTempUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(storedUser);
            setTempUser(storedUser);
        }
    }, [navigate]);

    const handleChange = (e) => {
        setTempUser({ ...tempUser, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setUser(tempUser);
        localStorage.setItem("userData", JSON.stringify(tempUser));
        setIsEditing(false);
        alert("Profile Updated Successfully!");
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-[#f8fafc] flex justify-center items-center p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse delay-700"></div>
            </div>

            <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/40 p-1 relative z-10">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-[1.3rem] h-40 relative">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all"
                    >
                        ← Back to Dashboard
                    </button>
                </div>

                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-6 flex justify-between items-end">
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-200 shadow-lg flex items-center justify-center text-4xl font-bold text-slate-400 overflow-hidden">
                            <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random&size=256`} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5"
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        setTempUser(user);
                                        setIsEditing(false);
                                    }}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-6 py-2.5 rounded-xl font-semibold transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-0.5"
                                >
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">{user.name}</h1>
                            <p className="text-slate-500 font-medium">{user.email}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Public Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={tempUser.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 uppercase font-bold text-slate-700"
                                    />
                                ) : (
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-lg font-bold text-slate-700 uppercase">{user.name}</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={tempUser.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium text-slate-700"
                                    />
                                ) : (
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-lg font-medium text-slate-700">{user.email}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                            <h3 className="text-indigo-900 font-bold mb-2">Profile Status</h3>
                            <p className="text-indigo-700/80 text-sm">Your profile is active and visible. All changes are saved locally.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
