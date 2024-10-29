/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image"

inquirer
  .prompt([
    {
        name: "URL",
        message: "Type the URL:"
    }
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('URL.png'));
    console.log("QRcode has been saved.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.message)
    }
  });