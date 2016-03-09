# grunt-version-checker

[![Build Status](https://travis-ci.org/poppinlp/grunt-version-checker.png?branch=master)](https://travis-ci.org/poppinlp/grunt-version-checker)
[![Dependency Status](https://david-dm.org/poppinlp/grunt-version-checker.svg)](https://david-dm.org/poppinlp/grunt-version-checker)
[![devDependency Status](https://david-dm.org/poppinlp/grunt-version-checker/dev-status.svg)](https://david-dm.org/poppinlp/grunt-version-checker#info=devDependencies)

Check version setting in Gruntfile and do some stuff you want.

## Getting Started

This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-version-checker --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-version-checker');
```

## The "version-checker" task

### Overview

In your project's Gruntfile, add a section named `version-checker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    "version-checker": {
        your_target: {
            // options
        }
    }
})
```

This task will check your version setting, compare it with older one. If it's newer, run command you set in command.

### Options

#### version {String}

This is your version setting. Task will compare it with older one.

#### command {String}

If version is newer, command will be run.

### Example

```js
grunt.initConfig({
    "version-checker": {
        update: {
            version: '2016-01-01',
            command: 'npm update'
        }
    }
})
```

## Demo

```shell
grunt test
```

## History

- 0.0.1 Init
