const { exec } = require("child_process");
const fs = require("fs");
const util = require("util");

const directoryPath = ".\\iconos\\";
const execPromise = util.promisify(exec);

async function processFile(file) {
  if (!file.endsWith(".png")) {
    return;
  }

  const filename = file.split(".").shift();
  const convertCommand = `magick convert ${directoryPath}${file} -alpha remove -compress lzw ${directoryPath}${filename}.tif`;
  const resizeCommand = `magick convert ${directoryPath}${filename}.tif -resize 500% -threshold 50% ${directoryPath}${filename}.pnm`;
  const potraceCommand = `potrace ${directoryPath}${filename}.pnm -s -o ${directoryPath}${filename}.svg`;

  try {
    console.log(`Starting processing of file: ${file}`);
    await execPromise(convertCommand);
    await execPromise(resizeCommand);
    await execPromise(potraceCommand);
    console.log(`Finished processing of file: ${file}`);
  } catch (error) {
    console.error(`Error processing file: ${file}. Error: ${error}`);
  }
}

fs.readdir(directoryPath, async (error, files) => {
  if (error) {
    console.error(`Error reading directory: ${error}`);
    return;
  }

  try {
    console.log("Starting image processing...");
    await Promise.all(files.map(processFile));
    console.log("Finished image processing");
  } catch (error) {
    console.error(`Error processing files: ${error}`);
  }
});
