@echo off

echo JSX'ing the react components...
rd .jsx-cache /S /Q
rd ./js/views/components /S /Q
node ./node_modules/react-tools/bin/jsx ./jsx ./js/views/components --cache-dir ./.jsx-cache -x jsx

echo Optimizing application...please wait
rem node ./node_modules/requirejs/bin/r.js -o ./css/build.css.js
node ./node_modules/requirejs/bin/r.js -o build.js

echo Cleaning up...
cd ./release-build
rd jsx /S /Q
rd documentos /S /Q
del *.bat
del build*.*
del package.json
del README.MD
cd ..

echo Build Finished!
