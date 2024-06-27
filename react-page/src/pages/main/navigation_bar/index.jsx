import { Link } from 'react-router-dom'; // 引入 Link 组件用于导航
import { useState } from 'react'; // 引入 useState 钩子用于管理菜单状态
import "./index.css"; // 引入样式文件

export default function NavigationBar({ scrollToSection, refs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 管理菜单的打开和关闭状态

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // 切换菜单的打开和关闭状态
    };

    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/" onClick={() => scrollToSection(refs.aboutRef)}>Zhenxiang Lin</Link> {/* 点击时滚动到 About 部分 */}
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/about" onClick={() => scrollToSection(refs.aboutRef)}>About</Link> {/* 点击时滚动到 About 部分 */}
                <Link to="/publication" onClick={() => scrollToSection(refs.publicationRef)}>Publication</Link> {/* 点击时滚动到 Publication 部分 */}
                <Link to="/projects" onClick={() => scrollToSection(refs.projectRef)}>Projects</Link> {/* 点击时滚动到 Projects 部分 */}
                <Link to="/education" onClick={() => scrollToSection(refs.educationRef)}>Education</Link> {/* 点击时滚动到 Education 部分 */}
                <Link to="/work" onClick={() => scrollToSection(refs.workRef)}>Work</Link> {/* 点击时滚动到 Work 部分 */}
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}
