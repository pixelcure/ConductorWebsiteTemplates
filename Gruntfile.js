'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');  
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-browser-sync');

    // configurable paths
    var buildConfig = {
        app: 'app',
        dist: 'dist'
    };
    
    grunt.initConfig({
        
        buildConfig: buildConfig,
        
        connect: {
            server: {
              options: {
                port: 9001,
                base: '<%= buildConfig.app %>/'
              }
            }
        },

        watch: { 
            options: {
                reload: true
            },
            compass: {
                files: '<%= buildConfig.app %>/styles/sass/**/*.scss',
                tasks: ['compass:dev'],
            }        
        },

        browserify: {
            dev: {
                    options: {
                        transform: [['babelify', {presets: ['es2015', 'react']}]],
                        watch : true, // use watchify for incremental builds!
                        // keepAlive : true, // watchify will exit unless task is kept alive
                        browserifyOptions : {
                            debug : true // source mapping
                        }                        
                    },
                    src: ['<%= buildConfig.app %>/scripts/main.js'],
                    dest: '<%= buildConfig.app %>/localBuild/dev.js'
                },
            dist: {
                    options: {
                        transform: [['babelify', {presets: ['es2015', 'react']}]]
                    },        
                    src: ['<%= buildConfig.app %>/scripts/main.js'],
                    dest: '<%= buildConfig.dist %>/scripts/prod.js'
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '<%= buildConfig.app %>/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= buildConfig.app %>/scripts/{,*/}*.js',
                '!<%= buildConfig.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        usemin: {
            html: ['<%= buildConfig.dist %>/{,*/}*.html'],
            css: ['<%= buildConfig.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= buildConfig.dist %>']
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= buildConfig.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= buildConfig.dist %>/images'
                }]
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= buildConfig.dist %>/styles/main.css': [
                        '<%= buildConfig.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/buildConfig/grunt-usemin/issues/44
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= buildConfig.app %>',
                    src: '*.html',
                    dest: '<%= buildConfig.dist %>'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= buildConfig.app %>',
                    dest: '<%= buildConfig.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }]
            }
        },

        rev: {
            dist: {
                files: {
                    src: [
                        '<%= buildConfig.dist %>/scripts/{,*/}*.js',
                        '<%= buildConfig.dist %>/styles/{,*/}*.css',
                        '<%= buildConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '/styles/fonts/{,*/}*.*',
                    ]
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: '<%= buildConfig.app %>/styles/sass',
                    imageDir: '<%= buildConfig.dist %>/images',
                    cssDir: '<%= buildConfig.dist %>/styles',
                    outputStyle: 'compressed',
                    fontsDir: '<%= buildConfig.dist %>/fonts',
                    //relativeAssets: true,
                    noLineComments: true
                }
            },
            dev: {
                options: {
                    sassDir: '<%= buildConfig.app %>/styles/sass',
                    imagesDir: '<%= buildConfig.app %>/images',
                    cssDir: '<%= buildConfig.app %>/styles/css',
                    fontsDir: '<%= buildConfig.app %>/fonts'
                }
            }
        } 

    });

    // Build Dist Task
    grunt.registerTask('build', [
        // 'clean:dist',
        'compass:dist',        
        'browserify:dist',
        'imagemin',
        'htmlmin',
        // 'concat',
        'cssmin',
        // 'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    // Default Build App Task
    grunt.registerTask('default', [
        // 'jshint',
        'browserSync:dev',
        'browserify:dev',
        'watch'
    ]);

};
