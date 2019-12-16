import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {shuffle,sample} from 'underscore';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutPage from './pages/about/AboutPage';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';


ReactDOM.render(
          <BrowserRouter>
              <Navbar/>
              <Route exact path='/' component={App}/>
              <Route exact path='/about' component={AboutPage}/>
              <Route exact path='/blog' component={Blog}/>
              <Route exact path='/blogDetails' component={BlogDetails}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/projects' component={Projects}/>

              <Footer/>
          </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
