import { useLoaderData } from "react-router-dom";
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <div className="bg-purple-600 py-8 lg:py-14 px-4 ">
                <div className="text-center pt-6 lg:pt-10">
                    <h2 className="text-2xl lg:text-4xl pb-2 font-bold text-center text-white">Statistics</h2>
                    <p className="text-white m-auto max-w-[600px] mb-4 text-sm lg:text-base">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center px-4 py-6">
                <h2 className="text-xl lg:text-3xl font-bold mb-4">Product Statistics:</h2>
  
                {/* Bar Chart for Price and Rating */}
                <div className="w-full max-w-[1000px] h-[300px] lg:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="product_title" tick={false} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="rating" fill="#82ca9d" stroke="#82ca9d" />
                            <Bar dataKey="price" barSize={30} fill="#413ea0" />
                            <Line type="monotone" dataKey="availability" stroke="#ff7300" dot={false} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
