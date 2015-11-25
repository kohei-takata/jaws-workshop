#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'jaws-workshop',
    title       : 'Learn JAWS-framework',
    subtitle    : 'Learn JAWS-framework',
    appDir      : __dirname,
    menuItems   : [],
    languages   : ['en'],
    exerciseDir : fpath('./exercises/')
})
