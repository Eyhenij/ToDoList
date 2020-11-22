import React from "react";
import './App.css';
import {connect} from "react-redux";
import App from "./App";
import {addTask, updateNewTask} from "./redux/tasksReducer";


const mapStateToProps = (state) => {
    return {
        listData: state.listData
    }
};

const AppContainer = connect(mapStateToProps, { addTask, updateNewTask })(App);
export default AppContainer;
