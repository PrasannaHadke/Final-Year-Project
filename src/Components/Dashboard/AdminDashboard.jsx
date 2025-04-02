import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [users, setUsers] = useState([]);

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
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500 text-lg">No members found.</p>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;
