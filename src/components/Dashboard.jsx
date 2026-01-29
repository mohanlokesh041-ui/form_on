const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check authentication on component mount
  useState(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userEmail = localStorage.getItem("userEmail");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!isAuthenticated || isAuthenticated !== "true") {
      navigate("/login");
      return;
    }

    if (userData && userData.email === userEmail) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2.5 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors"
          >
            Logout
          </button>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-300/20 p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, {user ? user.name : "User"}! 👋</h2>
          <p className="text-slate-500 mb-8">Here's your account information</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4">Account Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-indigo-600">Full Name</p>
                  <p className="font-medium text-indigo-900">{user ? user.name : "Loading..."}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-600">Email Address</p>
                  <p className="font-medium text-indigo-900">{user ? user.email : "Loading..."}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-600">Account Created</p>
                  <p className="font-medium text-indigo-900">
                    {user ? new Date(user.createdAt).toLocaleDateString() : "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow transition-all">
                  <div className="font-medium text-slate-800">Edit Profile</div>
                  <div className="text-sm text-slate-500">Update your personal information</div>
                </button>
                <button className="w-full text-left p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow transition-all">
                  <div className="font-medium text-slate-800">Change Password</div>
                  <div className="text-sm text-slate-500">Set a new password for your account</div>
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 hover:bg-red-100 transition-all"
                >
                  <div className="font-medium">Sign Out</div>
                  <div className="text-sm text-red-600">Logout from your account</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;