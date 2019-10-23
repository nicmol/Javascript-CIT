import React, {Component} from 'react';
//import { connect } from 'react-redux';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


/* class Navbar extends Component{
    render() {
        return(
          <nav class="navbar navbar-default">
          <div class="container-fluid">
          <div class="navbar-header">
            <span class="navbar-brand">CIT Lab</span>
          </div>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">      
            <li><a href="action=home">c</a>Home</li>
            <li><a href="action=schedule">Schedule</a></li>
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
}  */

class Navbar extends Component{
//const Navbar = (props) => {
  render(){
  return (
    <div>    
      <Nav>
        <NavLink href="#">CIT Lab</NavLink>
         <NavLink href="#">Home</NavLink>
          <NavLink href="#">Schedule</NavLink> 
          <NavLink href="#">Ask a Question</NavLink>
          <NavLink href="#">Thank A Tutor</NavLink> 
          <NavLink href="#">Recent Activity</NavLink> 
          <NavLink href="#">Help Me Please</NavLink> 
          <NavLink href="#">Logout</NavLink> 
      </Nav>
    </div>
  );
}
}
export default Navbar;





 











