import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const mockData = [
  { time: '08:00', powerBefore: 1200, powerAfter: 800 },
  { time: '09:00', powerBefore: 1220, powerAfter: 790 },
  { time: '10:00', powerBefore: 1210, powerAfter: 750 },
  { time: '11:00', powerBefore: 1180, powerAfter: 720 },
  { time: '12:00', powerBefore: 1175, powerAfter: 710 },
  { time: '13:00', powerBefore: 1190, powerAfter: 700 },
  { time: '14:00', powerBefore: 1205, powerAfter: 690 },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          實時能耗監測與節能效益分析
        </h1>

        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">風機用電量變化（單位：W）</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="powerBefore" name="改造前" stroke="#8884d8" />
              <Line type="monotone" dataKey="powerAfter" name="改造後" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10 bg-blue-50 p-4 rounded text-blue-800">
          <p>本日累計節能：<strong>3.4 kWh</strong>（降幅約 <strong>32%</strong>）</p>
          <p>預估年節省電費：約 <strong>NT$12,400</strong></p>
        </div>
      </section>
    </main>
  );
}
