module.exports = function(grunt){
	//configuration
	grunt.initConfig({
		concat: {
			js:{
			src:['js/*.js'],
			dest:'build/js/script.js'
			},
			css:{
			src: ['csss/*.css'],
			dest:'build/css/style.css'
			}
		}
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('concat-js',['concat:js']);
	grunt.registerTask('concat-css',['concat:js']);
};
