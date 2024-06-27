import React from 'react';
import "./work.css"; // 引入样式文件

const workList = [
    {
        title: "Research Assistant",
        company: "ShanghaiTech University",
        timeline: "2021-2023",
        details: [
            "Topic: 3D Vision Grounding"
        ]
    },
    {
        title: "Maintenance Engineer",
        company: "State Grid Shanghai Municipal Electric Power Company",
        timeline: "2016-2019",
        details: []
    },
    // 可以添加更多工作经历
];

export default function Work() {
    return (
        <>
            <div className='title'>
                <h2>Work Experience</h2> {/* 大标题 */}
            </div>
            <div className="work-container">
                {workList.map((work, index) => (
                    <div key={index} className="work-content">
                        <div className="work-header">
                            <div className="work-title">
                                <b>{work.title}</b> in {work.company}
                            </div>
                            <div className="work-timeline">
                                {work.timeline}
                            </div>
                        </div>
                        <div className="work-body">
                            <ul className="work-details">
                                {work.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
