import React from 'react';
import "./projects.css"; // 引入样式文件
import WildReferImage from '../../assets/images/projects/wildrefer-teaser.png'; // 引入第一张项目图片路径
import MsProjImage from '../../assets/images/projects/master-rsch-proj.png'; // 引入第二张项目图片路径
import MsProjDoc from '../../assets/docs/master-rsch-proj.pdf'

const projectList = [
    {
        title: "3D Vision Grounding on Large-Scale Scenes",
        role: "Research Assistant's Project, 2021-2023.",
        link: "https://arxiv.org/abs/2304.05645",
        linkText: "arXiv",
        description: "We introduced the task of 3D visual grounding in large-scale dynamic scenes based on natual linguistic descriptions and online captured multi-modal visual data, including 2D images and 3D LiDAR point clouds. We presented a novel method, WildRefer, and proposed two novel datasets focusing on large-scale human-centric daily-life scenarios.",
        image: WildReferImage
    },
    {
        title: "Multi-label Long-tailed Distribution Image Classification",
        role: "Master Research Project, 2021.",
        link: MsProjDoc,
        linkText: "Report",
        description: "We researched SOTA methods for solving the long-tailed Distribution problem, and conducted experiemnts on different factors including data resampling, loss re-weighting and feature extractor. Finally, we combined the advantages of different methods and achieve a higher performance.",
        image: MsProjImage
    },
    // 可以添加更多项目
];

export default function Projects() {
    return (
        <>
            <div className="title">
                <h2>Selected Projects</h2> {/* 大标题 */}
            </div>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-content">
                        <div className="project-photo">
                            <img src={project.image} alt="Project" /> {/* 显示图片 */}
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">
                                {project.title}
                            </h3> {/* 项目标题 */}
                            <p className="project-role">
                                {project.role} <a href={project.link}>[{project.linkText}]</a>
                            </p> {/* 项目角色和链接 */}
                            <p className="project-description">
                                {project.description}
                            </p> {/* 项目描述 */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
