import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full text-gray-100">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-blue-400">Dashboard</h1>
        
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-gray-800 border border-blue-500/20 p-6 rounded-xl hover:border-blue-500 transition">
          <p className="text-gray-400 text-sm">Students</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-400">1,240</h2>
        </div>

        <div className="bg-gray-800 border border-blue-500/20 p-6 rounded-xl hover:border-blue-500 transition">
          <p className="text-gray-400 text-sm">Courses</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-400">32</h2>
        </div>

        <div className="bg-gray-800 border border-blue-500/20 p-6 rounded-xl hover:border-blue-500 transition">
          <p className="text-gray-400 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-400">$4,200</h2>
        </div>

        <div className="bg-gray-800 border border-blue-500/20 p-6 rounded-xl hover:border-blue-500 transition">
          <p className="text-gray-400 text-sm">Active Users</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-400">320</h2>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Chart */}
        <div className="xl:col-span-2 bg-gray-800 border border-blue-500/20 p-6 rounded-xl">
          <h3 className="mb-4 font-semibold text-blue-400">Analytics</h3>
          <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center text-gray-500">
            Chart Area
          </div>
        </div>

        {/* Activity */}
        <div className="bg-gray-800 border border-blue-500/20 p-6 rounded-xl">
          <h3 className="mb-4 font-semibold text-blue-400">Activity</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p className="hover:text-blue-400 transition">User registered</p>
            <p className="hover:text-blue-400 transition">Course added</p>
            <p className="hover:text-blue-400 transition">Payment received</p>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="mt-10 bg-gray-800 border border-blue-500/20 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-blue-400">Recent Courses</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead className="border-b border-gray-700 text-gray-400">
              <tr>
                <th className="py-3 text-left">Course</th>
                <th className="text-left">Students</th>
                <th className="text-left">Price</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-3">React Course</td>
                <td>120</td>
                <td>$49</td>
                <td className="text-green-400">Published</td>
              </tr>

              <tr className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-3">Node.js Course</td>
                <td>90</td>
                <td>$39</td>
                <td className="text-yellow-400">Draft</td>
              </tr>

              <tr className="hover:bg-gray-700">
                <td className="py-3">UI/UX Design</td>
                <td>60</td>
                <td>$29</td>
                <td className="text-green-400">Published</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;