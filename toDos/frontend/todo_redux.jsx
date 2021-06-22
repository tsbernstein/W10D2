import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions'
import { receiveSteps, receiveStep, removeStep } from './actions/steps_actions'

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
  })


