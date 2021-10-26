import React from 'react';
import './App.css';
// import ProductList from './components/ProductList/ProductList';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
        
                    {this.showContentPages(routes)}
                </div>
            </Router>
        );
    }
    showContentPages = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}


export default App;
