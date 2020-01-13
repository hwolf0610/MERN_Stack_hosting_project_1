import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  
  render() {
    // localStorage.setItem("url", "");
    localStorage.setItem("url", "http://localhost:3000");
    localStorage.setItem("word1", "실적");
    localStorage.setItem("word2", "인원수");
    localStorage.setItem("word3", "실적 프로수");
    localStorage.setItem("word4", "우리 총 계획");
    localStorage.setItem("word5", "사용자관리");
    localStorage.setItem("word6", "실적관리");
    localStorage.setItem("word7", "계획관리");
    localStorage.setItem("word8", "사용자추가");
    localStorage.setItem("word9", "사용자정보변경");
    localStorage.setItem("word10", "실적추가");
    localStorage.setItem("word11", "실적정보변경");
    localStorage.setItem("word12", "계획추가");
    localStorage.setItem("word13", "계획정보변경");
    localStorage.setItem("word14", "현재 월 실적");
    localStorage.setItem("word15", "계획작성");
    localStorage.setItem("word16", "주간 실적 도표");
    localStorage.setItem("word17", "개인별 실적자료");
    localStorage.setItem("word18", "월간 실적 도표");
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
