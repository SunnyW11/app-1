import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Weather from './Weather'

import './Demos.css';


const routes = [
    {
        path: '/Demos',
        exact: true,
        main: () => <h2>Home</h2>
    },
    {
        path: '/Demos/weather',
        main: Weather
    },
    {
        path: '/Demos/shoelaces',
        main: () => <h2>Shoelaces</h2>
    }
]

const Demos = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '10px',
                width: '10%',
                background: '#f0f0f0'
            }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/Demos">Home</Link></li>
                    <li><Link to="/Demos/weather">Weather</Link></li>
                    <li><Link to="/Demos/shoelaces">Shoelaces</Link></li>
                </ul>

                {routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                    // component={route.main}
                    />
                ))}
            </div>

            <div style={{ flex: 1, padding: '10px' }}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>
)


export default Demos;