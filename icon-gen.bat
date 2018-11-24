REM Usage set the folder in path , Call icon-gen icon.png will produce various resizeable image files
@echo off
SET currentDIR=%CD%
SET filename=%currentDIR%\%1
set "filename=%filename:\=/%"
echo %filename%
pushd %~dp0
node index.js 	%filename%
popd