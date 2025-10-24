import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', { email, password });
        alert(`Account created for: ${email}`);
    };
return (
    <div>
        <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
            <p className="text-gray-600 text-center mb-8">Create your new account</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                    Create Account
                </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
                Already have an account? <span className="text-black font-semibold cursor-pointer hover:underline">Log in</span>
            </p>
        </div>
    </div>
);
};

export default SignUp;