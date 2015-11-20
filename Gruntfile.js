module.exports = function(grunt){
	// require("matchdep").filterDev("grunt-*").foreach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options :{
				banner: '/*! <%= pkg.name %>-<%=pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: [{
					src: 'src/index.js',
					dest: 'build/index.min.js'
				},{
					src: 'src/main.js',
					dest: 'build/main.min.js'
				}]
			}
		},

		jshint: {
			build: ['Gruntfile.js', 'src/*.js'],
			options :{
				jshintrc: '.jshintrc'
			}
		},

		csslint: {
			build: ['src/*.css'],
			options :{
				csslintrc: '.csslintrc'
			}
		},

		watch: {
			build: {
				files: ['src/*.js', 'src/*.css'],
				tasks: ['jshint','csslint','uglify'],
				options: {spawn: false}
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint','csslint','watch']);
};

