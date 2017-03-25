#!/bin/bash
yarn build && node_modules/.bin/gh-pages -d dist
