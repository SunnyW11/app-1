import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import './Header.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            date: ''
        }
        this.timer = this.timer.bind(this);
    }
    // 定时改变state中的时间值
    timer() {
        var time1 = new Date();
        this.setState({
            date: time1,
        });
    }

    // 先获取一个时间 防止组件渲染时出现短暂空白
    componentWillMount() {
        var time1 = new Date();
        this.setState({
            date: time1,
        });
    }

    // 组件渲染完之后  设定一个1000ms的定时器 
    componentDidMount() {
        window.timerCtrl = setInterval(() => {
            this.timer()
        }, 1000);
    }

    // 组件销毁后  清除定时器
    componentWillUnmount() {
        clearInterval(window.timerCtrl);
    }

    render() {
        return (
            <div id='header'>
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/Demos">Demos</Link></li>
                    <li><Link to="/About">关于我</Link></li>
                </ul>
                <div id='showTime'>
                    当前时间：
                    {this.state.date.toLocaleDateString()}
                    -
                    {this.state.date.toLocaleTimeString()}
                </div>
            </div>
        );
    }
}

export default Header;