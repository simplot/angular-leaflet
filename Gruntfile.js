global._ = require('lodash');

module.exports = function(grunt) {

  // Utility to load the different option files
  // based on their names
  function loadConfig(path) {
    var glob = global._;
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  // Initial config
  var config = {
    pkg: grunt.file.readJSON('package.json')
  }

  // Load tasks from the tasks folder
  grunt.loadTasks('tasks');

  // Load all the tasks options in tasks/options base on the name:
  // watch.js => watch{}
  //grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.initConfig(config);

  //require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['angular_architecture_graph', 'bower', 'bump', 'changelog', 'clean', 'concurrent', 'connect', 'coveralls', 'jshint', 'karma', 'ngAnnotate', 'open', 'pkg', 'protractor', 'shell', 'uglify', 'watch']);

  // Moved to the tasks folder:
  // grunt.registerTask('dev', ['connect', 'watch']);

};