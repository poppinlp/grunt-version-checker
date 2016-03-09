module.exports = function(grunt) {
    grunt.initConfig({
        "version-checker": {
            test: {
                version: 1,
                command: "ls -al"
            }
        }
    });

    grunt.loadTasks("tasks");

    grunt.registerTask("default", ["test"]);
    grunt.registerTask("test", [
        'version-checker'
    ]);
};
