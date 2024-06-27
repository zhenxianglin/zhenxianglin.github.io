import React from 'react';
import "./publication.css"; // 引入样式文件
import publicationImage from '../../assets/images/projects/wildrefer.png'; // 引入图片路径

const paperList = [
    {
        title: "WildRefer: 3D Object Localization in Large-scale Dynamic Scenes with Multi-modal Visual Data and Natural Language",
        authors: "Zhenxiang Lin, Xidong Peng, Peishan Cong, Yuenan Hou, Xinge Zhu, Sibei Yang, Yuexin Ma",
        source: "arXiv",
        link: "https://arxiv.org/abs/2304.05645"
    },
    // 可以添加更多论文
];

export default function Publication() {
    return (
        <>
            <div className='title'>
                <h2>Publication and Preprint</h2> {/* 大标题 */}
            </div>
            <div className="publication-container">
                <div className="publication-content">
                    <div className="publication-photo">
                        <img src={publicationImage} alt="Publication" /> {/* 显示图片 */}
                    </div>
                    <div className="publication-info">
                        {paperList.map((paper, index) => (
                            <div key={index} className="paper-item">
                                <h3 className="publication-title">
                                    <a href={paper.link}>{paper.title}</a>
                                </h3> {/* 可点击的标题 */}
                                <p className="publication-authors">
                                    <strong>{paper.authors.split(', ')[0]}</strong>, {paper.authors.split(', ').slice(1).join(', ')}
                                </p> {/* 作者 */}
                                <p className="publication-source">
                                    {paper.source}
                                </p> {/* 论文来源 */}
                                <p className="publication-link">
                                    <a href={paper.link}>paper</a>
                                </p> {/* 论文链接 */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
