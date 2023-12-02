import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles.css";

const Data = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const userOnePosts = data.filter((post) => post.userId === 1);
        setFilteredData(userOnePosts);
    }, [data]);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const renderTable = () => {
        if (filteredData.length === 0) {
            return <p>No posts for User ID 1</p>;
        }

        const columns = Object.keys(filteredData[0]);

        return (
            <div style={{ padding: "15px" }}>
                <table className="styled-table">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column}>{column.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column) => (
                                    <td key={column}>{row[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderPieChart = () => {
        const totalPosts = data.length;
        const userOnePostsCount = filteredData.length;
        const dataForPieChart = [
            { name: "User 1", value: userOnePostsCount },
            { name: "Other Users", value: totalPosts - userOnePostsCount },
        ];

        return (
            <div className="pie-chart-container">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dataForPieChart}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    >
                        {dataForPieChart.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        );
    };

    return (
        <div className="data-container">
            {loading && (
                <Backdrop
                    sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            {!loading && renderPieChart()}
            {!loading && renderTable()}
        </div>
    );
};

export default Data;
