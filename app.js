// MODULE
const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const { Sequelize } = require('./models')

dotenv.config();

class App {
  constructor() {
    this.app = express();

    // 뷰 엔진 셋팅
    this.setViewEngine();

    //미들웨어 셋팅
    this.setMiddleWare();

    // db connection
    this.dbconnection();

    //로컬변수 셋팅
    this.setStatic();

    //라우팅
    this.getRouting();

    //404 Error
    this.status404();

    //Error Handler
    this.errorHandler();
  }

  setViewEngine() {
    this.app.set('view engine', 'html');

    nunjucks.configure('Template', {
      autoescape: true,
      watch:true,
      express: this.app
    })
  }

  setMiddleWare() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false}));
    this.app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }));
  }
  dbconnection() {
    db.sequelize.authenticate()
    .then(() => {
        console.log('연결 성공');
        return db.sequelize.sync();
    })
    .catch((err) => {
      console.log('연결 실패');
      console.error(err);
    })
  }

  setStatic() {
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.static('public/img'));
    this.app.use(express.static('public/js'))
    this.app.use(express.static('upload/'))
  }

  getRouting() {
    this.app.use(require('./controllers'));
  }

  status404() {
    this.app.use((req, res, next) => {
      const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
      error.status = 404;
      next(error);
    })
  }

  errorHandler() {
    this.app.use((err, req, res, next) => {
      res.locals.message = err.message;
      res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
      res.status(err.status || 500);
      res.render('error');
    })
  }
}

module.exports = new App().app;