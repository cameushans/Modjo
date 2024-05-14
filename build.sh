#!/bin/bash

DIST_PATH="dist"
CURRENT_PATH=$(pwd)

if [ -d "$CURRENT_PATH/$DIST_PATH" ]; then
    rm -rf "$CURRENT_PATH/$DIST_PATH"
    echo "Successfully reinitilised build folder"
    tsc --build
    exit 0;
else
    echo "The dist folder does not exit at $CURRENT_PATH."
    tsc --build
fi
