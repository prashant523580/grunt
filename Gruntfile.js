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


	grunt.loadNpmTasks('grunt-contrib-concat');
};
