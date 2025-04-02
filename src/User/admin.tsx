import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser} from "../api/firebase";
import { Tab } from "@headlessui/react";

const Admin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  // Removed unused loading state
  const [fetchingUsers, setFetchingUsers] = useState(true);

  // ✅ Fetch all users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setFetchingUsers(true);
        const userList = await getAllUsers();
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setFetchingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  // ✅ Handle user deletion
  const handleDeleteUser = async (uid: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(uid);
        setUsers(users.filter((user) => user.uid !== uid));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }
    }
  };

  // ✅ Handle mass email submission
  const handleSendMassEmail = async () => {
    if (!emailSubject || !emailBody) {
      alert("Please fill in both the subject and email body.");
      return;
    }
    setIsSending(true);
    try {
    const res = await fetch("https://qmalogan.netlify.app/.netlify/functions/sendNewsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: emailSubject,
        html: emailBody
      })
    });
  
      if (res.ok) {
        alert("Email sent!");
        setEmailSubject("");
        setEmailBody("");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="custom-bg custom-dark flex items-center justify-center"
    style= {{minHeight: 'calc(100vh - 30rem)'}}
    >
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Admin Panel
        </h2>

        {/* ✅ Tabs */}
        <Tab.Group>
          <Tab.List className="flex border-b">
            <Tab
              className={({ selected }) =>
                `py-3 px-6 text-lg font-semibold ${
                  selected
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                } focus:outline-none`
              }
            >
              Users
            </Tab>
            <Tab
              className={({ selected }) =>
                `py-3 px-6 text-lg font-semibold ${
                  selected
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                } focus:outline-none`
              }
            >
              Mass Email
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* ✅ User List Tab */}
            <Tab.Panel className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                All Users
              </h3>

              {fetchingUsers ? (
                <p className="text-gray-600 dark:text-gray-400">Loading users...</p>
              ) : users.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400">
                  No users found.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {users.map((user) => (
                    <div
                      key={user.uid}
                      className="flex items-center gap-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-gray-50 dark:bg-gray-700"
                    >
                      {/* ✅ Profile Picture */}
                      {user.profilePic ? (
                        <img
                          src={user.profilePic}
                          alt={`${user.firstName} ${user.lastName}`}
                          className="h-16 w-16 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                        />
                      ) : (
                        <div className="h-16 w-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                          ?
                        </div>
                      )}

                      {/* ✅ User Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user.role || "User"}
                        </p>
                      </div>

                      {/* ✅ Delete Button (aligned properly) */}
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleDeleteUser(user.uid)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium px-3 py-1 rounded border border-red-400 hover:border-red-500 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Tab.Panel>

            {/* ✅ Mass Email Tab */}
            <Tab.Panel className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Send Mass Email
              </h3>
              <div className="space-y-6">
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  placeholder="Email body..."
                  rows={6}
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMassEmail}
                  disabled={isSending}
                  className={`w-full bg-blue-500 text-white py-3 px-6 rounded-md transition ${
                    isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Email"}
                </button>

              </div>
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Preview:</h4>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: emailBody }}
              />
            </div>

            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Admin;
