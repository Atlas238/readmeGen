// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
