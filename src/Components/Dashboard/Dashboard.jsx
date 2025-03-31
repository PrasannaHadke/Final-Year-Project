import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  // const { logout } = useContext(UserContext);
  const {registerUser} = useContext(UserContext)
  if (!user) return <div className='text-center text-xl mt-5'>Please Log In</div>;

  const workoutSchedule = {
    Monday: { muscleGroup: 'Chest', exercises: ['Bench Press', 'Incline Dumbbell Press', 'Chest Flys'] },
    Tuesday: { muscleGroup: 'Back', exercises: ['Deadlifts', 'Pull-Ups', 'Bent-over Rows'] },
    Wednesday: { muscleGroup: 'Legs', exercises: ['Squats', 'Lunges', 'Leg Press'] },
    Thursday: { muscleGroup: 'Shoulders', exercises: ['Overhead Press', 'Lateral Raises', 'Face Pulls'] },
    Friday: { muscleGroup: 'Arms', exercises: ['Bicep Curls', 'Tricep Dips', 'Hammer Curls'] },
    Saturday: { muscleGroup: 'Full Body', exercises: ['Burpees', 'Kettlebell Swings', 'Clean and Press'] },
    Sunday: { muscleGroup: 'Rest', exercises: ['Light Stretching', 'Yoga', 'Foam Rolling'] },
  };

  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const todaysWorkout = workoutSchedule[today] || {};

  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-4'>Welcome, {user.fullName}!</h1>
        <p className='text-gray-600 text-center mb-6'>Your Gym Membership Dashboard</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Membership Status */}
          <div className='bg-blue-500 text-white p-4 rounded-lg text-center'>
            <h2 className='text-xl font-semibold'>Membership Status</h2>
            <p className='text-lg'>{registerUser.membership || 'Active'}</p>
          </div>

          {/* Workout Plan */}
          <div className='bg-green-500 text-white p-4 rounded-lg text-center'>
            <h2 className='text-xl font-semibold'>Workout Plan</h2>
            <p className='text-lg'>{user.workoutPlan || 'General Fitness'}</p>
          </div>
        </div>

        {/* Exercise Schedule */}
        <div className='mt-6 bg-gray-200 p-4 rounded-lg'>
          <h2 className='text-2xl font-bold text-center mb-3'>Today's Workout: {todaysWorkout.muscleGroup}</h2>
          <ul className='text-center text-lg'>
            {todaysWorkout.exercises?.map((exercise, index) => (
              <li key={index} className='py-1'>• {exercise}</li>
            )) || <li>Rest Day</li>}
          </ul>
        </div>

        {/* Actions */}
        <div className='flex justify-center mt-6'>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
            onClick={() => {
              logout();
              navigate('/signup');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
