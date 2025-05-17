#!/bin/bash

# Build the static site
echo "Building static site..."
npm run build

# The static site will be in the 'out' directory
echo "Static site built successfully! Files are in the 'out' directory."
echo "You can deploy these files to any static hosting service."
