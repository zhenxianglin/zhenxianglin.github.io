import React from 'react';
import "./education.css"; // 引入样式文件

const educationList = [
    {
        degree: "Master of Information Technology",
        field: "in Artificial Intelligence",
        institution: "University of New South Wales, Sydney, Australia",
        timeline: "2019-2021",
        details: [
            "Research Project: HD",
            "Award with Excellence"
        ]
    },
    {
        degree: "Bachelor of Engineering",
        field: "in Electrical Engineering and Automation",
        institution: "Shanghai University of Electric Power, Shanghai, China",
        timeline: "2012-2016",
        details: []
    },
    // 可以添加更多教育经历
];

export default function Education() {
    return (
        <>
            <div className='title'>
                <h2>Education Experience</h2> {/* 大标题 */}
            </div>
            <div className="education-container">
                {educationList.map((edu, index) => (
                    <div key={index} className="education-content">
                        <div className="education-header">
                            <div className="education-degree">
                                <b>{edu.degree}</b> {edu.field}
                            </div>
                            <div className="education-timeline">
                                {edu.timeline}
                            </div>
                        </div>
                        <div className="education-body">
                            <div className="education-institution">
                                {edu.institution}
                            </div>
                            <ul className="education-details">
                                {edu.details.map((detail, i) => (
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
