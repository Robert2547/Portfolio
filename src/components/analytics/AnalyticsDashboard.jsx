import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getAnalytics, resetAnalytics } from "../../utils/analytics";

const AnalyticsDashboard = ({ onClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const updateData = () => {
      const analytics = getAnalytics();
      if (analytics) {
        const chartData = Object.entries(analytics.sections).map(
          ([name, views]) => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            views,
          })
        );
        setData({ ...analytics, chartData });
      }
    };

    updateData();
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#64ffda]">
            Analytics Dashboard
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                resetAnalytics();
                window.location.reload();
              }}
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            >
              Reset Data
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1a1a4a] text-[#64ffda] border border-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#1a1a4a] border border-[#64ffda]/20">
            <h3 className="text-lg font-medium text-gray-300">
              Total Page Views
            </h3>
            <p className="text-3xl font-bold text-[#64ffda]">
              {data.pageViews}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#1a1a4a] border border-[#64ffda]/20">
            <h3 className="text-lg font-medium text-gray-300">First Visit</h3>
            <p className="text-xl text-[#64ffda]">
              {new Date(data.firstVisit).toLocaleDateString()}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#1a1a4a] border border-[#64ffda]/20">
            <h3 className="text-lg font-medium text-gray-300">Last Visit</h3>
            <p className="text-xl text-[#64ffda]">
              {new Date(data.lastVisit).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Section Views Chart */}
        <div className="p-6 rounded-lg bg-[#1a1a4a] border border-[#64ffda]/20">
          <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">
            Section Views
          </h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a5a" />
                <XAxis dataKey="name" stroke="#64ffda" />
                <YAxis stroke="#64ffda" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a4a",
                    border: "1px solid #64ffda",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="views" fill="#64ffda" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
