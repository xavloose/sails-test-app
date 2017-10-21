/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('bluebird');

module.exports = {
	
  

  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
    let data = {};
    data.entries = 123456;
    data.title = "Welcome to READS";
    return res.view('homepage.ejs', data);
  },
  
  search: function (req, res) {
    let data = {};
    proms = [];
    proms.push(new Promise(function (pass, fail) {
      tools = [];
      for(let i=0;i<10;i++) {
        tool = {};
        tool.id = i;
        tool.name = "Tool"+i;
        tool.version = "0."+i;
        tools.push(tool);
      };
      data.tools = tools;
      pass();
    }));
    proms.push(new Promise(function (pass, fail) {
      imgs = [];
      for(let i=0;i<10;i++) {
        img = {};
        img.id = i;
        img.name = "Image"+i;
        img.version = "0."+i;
        imgs.push(img);
      };
      data.imgs = imgs;
      pass();
    }));
    Promise.all(proms).then(function() {
      data.title = "Results";
      data.query = req.param('query');
      return;
    })
    .then(function() {
      return res.view('results.ejs', data);
    });
  }
};
