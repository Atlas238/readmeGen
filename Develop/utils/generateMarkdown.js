// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {

    case `gnuagpl` : return badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

    case `gnugpl` : return badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case `gnulgpl` : return badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;

    case `mozilla` : return badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case `apache` : return badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case `mit` : return badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case `boost` : return badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case `unlicense` : return badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

  }
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {

    case `mit` : 

    case `mozilla` :

    case `apache` :

    case `boost` :

    case `unlicense` :

    case `gnuap` :

    case `gnugp` :

    case `gnulp` :
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {

    case `mit` : 

    case `mozilla` :

    case `apache` :

    case `boost` :

    case `unlicense` :

    case `gnuap` :

    case `gnugp` :

    case `gnulp` :
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  \n
  ## Description\n
  ${data.description}\n
  \n
  ## Table of Contents\n
  \n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)\n
  \n
  ## Installation\n
  \n
  ${data.installation}\n
  \n
  ## Usage\n
  \n
  ${data.usage}\n
  \n
  ![Image Placeholder]()\n
  \n
  ![Image Placeholder]()\n
  \n
  ## Credits\n
  \n
  ${data.credits}\n
  \n
  ---\n
  \n
  ## Badges\n
  \n
  - ![placeholder]()\n
  \n
  ## Features\n
  \n
  ${data.features}\n
  \n
  ## How to Contribute\n
  \n
  ${data.contribute}\n
  \n
  ## Tests\n
  \n
  ${data.tests}\n
  `;
}

module.exports = generateMarkdown;
