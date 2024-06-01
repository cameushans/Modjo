#!/bin/bash

DIST_PATH="dist"
CURRENT_PATH=$(pwd)

zip_file_for_lambda() {
    zip handler.zip $CURRENT_PATH/$DIST_PATH/lambda/handler.js
}

build() {
    local input_string="$1"
    echo $input_string;
    tsc --build
    sleep 5;
    zip_file_for_lambda
    exit 0;
}

if [ -d "$CURRENT_PATH/$DIST_PATH" ]; then
    rm -rf "$CURRENT_PATH/$DIST_PATH";
    build "Successfully reinitilised build folder";
else
    build "The dist folder does not exit at $CURRENT_PATH."
fi
