import React from 'react';
import "./about.css"; // 引入样式文件
import selfPhoto from '../../assets/images/selfish/self.jpg'; // 引入照片路径
import selfCV from '../../assets/docs/CV-ZhenxiangLin.pdf'; // 引入CV文件路径

// 定义介绍内容，使用JSX语法
const introduction = (
    <>
        <p>
            I was a research assistant in <a href="https://www.shanghaitech.edu.cn/eng/">ShanghaiTech University</a> advised by Prof. <a href="https://yuexinma.me">Yuexin Ma</a>. Before that, I was a Master of IT student in <a href="https://unsw.edu.au">University of New South Wales</a> supervised by Prof. <a href="http://www.cse.unsw.edu.au/~ysong/">Yang Song</a>.
        </p>
        <p>
            My primary research interest mainly lies in Computer Vision, Natural Language Processing, Deep Learning, Robotics and related AI application.
        </p>
    </>
);

export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-photo">
                    <img src={selfPhoto} alt="Self" /> {/* 显示照片 */}
                </div>
                <div className="about-info">
                    <h2>About</h2> {/* 标题 */}
                    {introduction} {/* 插入介绍内容 */}
                    <p>
                        <a href="https://scholar.google.com/citations?user=oB9jmpMAAAAJ">Google Scholar</a> · <a href="https://github.com/zhenxianglin">GitHub</a> · <a href={selfCV}>CV</a> {/* 链接 */}
                    </p>
                </div>
            </div>
        </>
    );
}
