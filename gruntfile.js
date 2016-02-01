module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),




    concat: {
        options: {
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },
        dev: {
            src: ['src/js/vendor/jquery-1.11.2.min.js', 'src/js/vendor/bootstrap.js','src/js/plugins.js', 'src/js/main.js'],
            dest: 'js/script.min.js',
        },
    },

    uglify : {
    	// often called 'dist' instead of build
    	build: {
    		src: 'src/js/*.js',
    		dest: 'js/script.min.js'
    	},
    	dev: {
    		options: {
    			beautify: true,
    			mangle: false,
    			compress: false,
    			preserveComments: 'all'
    		},
    		src: 'js/script.min.js',
    		dest: 'js/script.min.js'
    	}
    },


    watch : {
	    options: {
	      livereload: true,
	    },
    	js: {
    		files: ['src/js/*.js'], // <-- when these files change
    		tasks: ['uglify:dev']	// <-- run this task
    	},
    	css: {
    		files: ['src/scss/**/*.scss'], // <-- when these files change
    		tasks: ['sass:dev']	// <-- run this task
    	}
    },


    sass: {
    	dev: {
    		options: {
    			outputStyle: 'expanded'
    		},
    		files: {
                'css/application.css'  :  'src/scss/application.scss'
    		}
    	},
    	build: {
    		options: {
    			outputStyle: 'compressed'
    		},
    		files: {
    			'css/application.css'  :  'src/scss/application.scss'
    		}
    	}
    } 

 

  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch'); // watch you do not need to resgister that task just enter on comand line 'grunt watch'
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register the default tasks.
  grunt.registerTask('default', ['concat:dev', 'uglify:dev', 'sass:dev']);
  grunt.registerTask('build', ['uglify:build', 'sass:build']);
};