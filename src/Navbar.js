import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './App.css';


class Navbar extends Component{
    render() {
        return(
          <nav class="navbar navbar-default">
          <div class="container-fluid">
          <div class="navbar-header">
            <span class="navbar-brand">CIT Lab</span>
          </div>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
            <li><a href="?action=home">Home</a></li>
            <li><a href="?action=schedule">Schedule</a></li>
            <li><a href="?action=ask">Ask a Question</a></li>
            <li><a href="?action=thank_tutor">Thank A Tutor</a></li>
            <li><a href="?action=student_data">Recent Activity</a></li>	  </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="https://lanecc.zoom.us/j/658215978" target="_blank">Help Me Please</a></li>
            <li><a href="?action=logout"><span></span>Logout</a></li>
            </ul>
          </div>
          </div>
        </nav>
        );
    }
} 
export default Navbar;





 











