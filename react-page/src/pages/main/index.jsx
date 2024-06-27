import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 引入 useLocation 钩子用于获取当前路径
import NavigationBar from "./navigation_bar";
import About from "../about";
import News from '../news'; // 引入 News 组件
import Publication from "../publication";
import Project from '../projects';
import Education from "../education";
import Work from "../work";
import "./main.css"; // 引入样式文件

export default function Main() {
    // 创建各个部分的引用，用于滚动定位
    const aboutRef = useRef(null);
    const newsRef = useRef(null); // 新增 News 部分的引用
    const publicationRef = useRef(null);
    const projectRef = useRef(null);
    const educationRef = useRef(null);
    const workRef = useRef(null);

    const location = useLocation(); // 获取当前路由位置

    const scrollToSection = (ref) => {
        // 滚动到引用的位置，并考虑导航栏的高度偏移
        window.scrollTo({
            top: ref.current.offsetTop - 80, // 偏移量为80像素，导航栏高度
            behavior: 'smooth' // 平滑滚动
        });
    };

    useEffect(() => {
        // 定义要观察的部分
        const sections = [aboutRef, newsRef, publicationRef, projectRef, educationRef, workRef];

        const observerOptions = {
            root: null, // 设置为视口
            rootMargin: "0px", // 没有额外的边距
            threshold: 0.1 // 当部分可见度达到10%时触发回调
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 当部分进入视口时，添加 'visible' 类并停止观察该部分
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // 观察每个部分
        sections.forEach(section => {
            if (section.current) {
                observer.observe(section.current);
            }
        });

        // 清除观察器
        return () => {
            sections.forEach(section => {
                if (section.current) {
                    observer.unobserve(section.current);
                }
            });
        };
    }, []); // 空依赖数组，确保仅在组件挂载时运行一次

    useEffect(() => {
        // 根据当前路径滚动到相应的部分
        switch (location.pathname) {
            case '/about':
                scrollToSection(aboutRef);
                break;
            case '/news':
                scrollToSection(newsRef);
                break;
            case '/publication':
                scrollToSection(publicationRef);
                break;
            case '/projects':
                scrollToSection(projectRef);
                break;
            case '/education':
                scrollToSection(educationRef);
                break;
            case '/work':
                scrollToSection(workRef);
                break;
            default:
                break;
        }
    }, [location.pathname]); // 当路径变化时重新运行

    return (
        <div>
            <NavigationBar scrollToSection={scrollToSection} refs={{
                aboutRef,
                newsRef, // 新增 News 部分的引用
                publicationRef,
                projectRef,
                educationRef,
                workRef
            }} />

            <div className="section" ref={aboutRef}>
                <About /> {/* About 部分 */}
            </div>
            <hr className="divider" /> {/* 分割线 */}

            {/* <div className="section" ref={newsRef}>
                <News /> News 部分
            </div>
            <hr className="divider" /> 分割线 */}

            <div className="section" ref={publicationRef}>
                <Publication /> {/* Publication 部分 */}
            </div>
            <hr className="divider" /> {/* 分割线 */}

            <div className="section" ref={projectRef}>
                <Project /> {/* Project 部分 */}
            </div>
            <hr className="divider" /> {/* 分割线 */}
            
            <div className="section" ref={educationRef}>
                <Education /> {/* Education 部分 */}
            </div>
            <hr className="divider" /> {/* 分割线 */}

            <div className="section" ref={workRef}>
                <Work /> {/* Work 部分 */}
            </div>
            
            {/* 页脚部分 */}
            <footer className="footer">
                <p>Copyright &copy; 2024 @ Zhenxiang Lin</p>
            </footer>
        </div>
    );
}
