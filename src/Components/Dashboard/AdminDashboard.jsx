import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../Context/UserContext';
function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const { registerUser } = useContext(UserContext)
    const [editingUser, setEditingUser] = useState(null); // store the user being edited

    console.log(registerUser);

    // Fetch users from API
    const getData = async () => {
        try {
            const response = await axios.get("https://6788e51d2c874e66b7d6c01d.mockapi.io/one");
            setUsers(response.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Delete user from API
    const deleteData = async (userId) => {
        try {
            await axios.delete(`https://6788e51d2c874e66b7d6c01d.mockapi.io/one/${userId}`);
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Gym Dashboard Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Gym Admin Dashboard</h1>
                <p className="text-lg text-gray-600 mt-2">Manage members and their subscriptions</p>
            </div>

            {/* User Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id} className="bg-white shadow-lg rounded-lg p-5 border flex flex-col items-center">
                            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                                {user.fullName.charAt(0)}
                            </div>
                            <p className="text-xl font-semibold text-gray-700 mt-3">{user.fullName}</p>
                            <p className="text-gray-600 font-medium">📧 {user.email}</p>
                            <p className="text-gray-600 font-medium">🏚️ {user?.address}</p>
                            <p className="text-gray-600 font-medium">📞 {user.phone}</p>
                            <p className="text-gray-500 font-medium">🏋️ Membership: {user.membership}</p>
                            <button
                                onClick={() => deleteData(user.id)}
                                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition hover:cursor-pointer"
                            >
                                Delete Member
                            </button>
                            <button
                                onClick={() => setEditingUser(user)}
                                className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                            >
                                Edit Member
                            </button>

                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500 text-lg">No members found.</p>
                )}
            </div>
            {editingUser && (
                <div className="bg-white p-4 rounded-xl shadow-lg max-w-md mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Edit Member</h2>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                const response = await axios.put(
                                    `https://6788e51d2c874e66b7d6c01d.mockapi.io/one/${editingUser.id}`,
                                    editingUser
                                );
                                // Update local state
                                setUsers(users.map((u) => (u.id === editingUser.id ? response.data : u)));
                                setEditingUser(null); // Close form
                            } catch (error) {
                                console.error("Error updating user:", error);
                            }
                        }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            value={editingUser.fullName}
                            onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
                            className="w-full border p-2 rounded"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="email"
                            value={editingUser.email}
                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                            className="w-full border p-2 rounded"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            value={editingUser.address}
                            onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
                            className="w-full border p-2 rounded"
                            placeholder="Address"
                        />
                        <input
                            type="text"
                            value={editingUser.phone}
                            onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                            className="w-full border p-2 rounded"
                            placeholder="Phone"
                        />
                        <select
                            value={editingUser.membership}
                            onChange={(e) => setEditingUser({ ...editingUser, membership: e.target.value })}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Select Membership</option>
                            <option value="Basic">Basic</option>
                            <option value="VIP">VIP</option>
                            <option value="Premium">Premium</option>
                        </select>

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditingUser(null)}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
}

export default AdminDashboard;
