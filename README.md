
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Pieter-stack/cloudStudent">
    <img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/logo%20(2).png" alt="Logo" width="100%" height="500">
  </a>

  <h3 align="center">Cloud Student</h3>

  <p align="center">
    Online classroom application using express.js for backend and React for frontend with API.
    <br />
    <a href="https://github.com/Pieter-stack/cloudStudent"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Pieter-stack/cloudStudent">View Demo</a>
    ·
    <a href="https://github.com/Pieter-stack/cloudStudent/issues">Report Bug</a>
    ·
    <a href="https://github.com/Pieter-stack/cloudStudent/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h1 style="display: inline-block">Table of Contents</h1></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#functions">Features and functions</a></li>
    <li><a href="#concept">Concept process</a>
          <ul>
        <li><a href="#ideation">Ideation</a></li>
        <li><a href="#wireframes">Wireframes</a></li>
        <li><a href="#userflow">User-flow diagram</a></li>
      </ul>
    </li>
     <li><a href="#dev">Development process - implementation</a></li>
      <li><a href="#demo">Demo video</a></li>
    <li><a href="#Contributions">Contributions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 <img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/mockup1.png" alt="mockup" width="" height="600" align="center">

<br></br>



### Built With

* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/)
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Middleware](https://expressjs.com/en/guide/using-middleware.html)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy of CloudStudent and running follow these simple steps.

### Prerequisites

* install Node.js [https://nodejs.org/en/](node.js) and follow the installation instructions

* homebrew
  ```sh
  brew install node
  brew install npm 
  ```

* npm
  ```sh
  npm install
  npm init --yes
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Pieter-stack/cloudStudent.git
   ```
2. Install NPM packages - server.js
   ```sh
   npm install --save es6-template-strings
   npm install socket.io-client
   npm install node-static

   ```

3. Create React project
```sh
npx create-react-app
```

4. Install NPM packages - React
   ```sh
   npm install --save es6-template-strings
   npm install socket.io

   ```

<br></br>

# Features and functions 
CloudStudent allows its users to login as student if student and see all of your classes and also see and click a meet-link to go to your virtual class.
CloudStudent allows its users to login as teacher if teacher and see all of your classes and use CRUD to add, delete and post classes.
 


See the [open issues](https://github.com/Pieter-stack/cloudStudent/issues) for a list of proposed features (and known issues).

<br></br>

# Concept process
### Ideation
For this project I did some research on online classroom apps and then I put together a moodboard of all my findings:


  <img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/Moodboard.png" alt="mockup" width="80%" height="600" align="center">
<br></br>

### Wireframes

I made multiple wireframes and transformed them into initial ideas:
  <img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/wireframes.png" alt="mockup" width="" height="600" align="center">

<br></br>

### User-flow diagram
After that, I created a simple userflow diagram, which depicts the basic information flow when the user interacts with the website.
  <img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/UserFlow.png" alt="mockup" width="" height="600" align="center">
<br></br>

# Development process and implementation
Roadmap of the last 8 weeks, here's a visual representation of my success and challenges.
* **Middleware** - In the first week I used middle ware to connect my api to express backend.
* **Authentication** - I then used authentication to secure my API from the public.
* **CRUD** - I added CRUD functionality into my project.
* **CLogin Page** - I did the login page and make student and teacher url and authentication.
* **Connecting React** - I then connected my express backend with my React frontend.


<!-- USAGE EXAMPLES -->
## Usage

This project can still be improved by makeing the slots better and adding a search by day for the students to only classes on a spesific day.

_<img src="https://github.com/Pieter-stack/cloudStudent/blob/main/Images/mockup2.png" alt="mockup" width="700" height="" align="center">
  <br></br>
_For more examples, please refer to the [Documentation](https://example.com)_


<!-- CONTRIBUTING -->
## Contributions

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - pieterven12@gmail.com

Project Link: [https://github.com/Pieter-stack/cloudStudent](https://github.com/Pieter-stack/cloudStudent)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [https://github.com/ArmandPret/rona]()
* [https://smartmockups.com/mockups/laptop]()
* [https://smartmockups.com/mockups/desktop]()






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Pieter-stack/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/Pieter-stack/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Pieter-stack/repo.svg?style=for-the-badge
[forks-url]: https://github.com/Pieter-stack/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Pieter-stack/repo.svg?style=for-the-badge
[stars-url]: https://github.com/Pieter-stack/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Pieter-stack/repo.svg?style=for-the-badge
[issues-url]: https://github.com/Pieter-stack/repo/issues
[license-shield]: https://img.shields.io/github/license/Pieter-stack/repo.svg?style=for-the-badge
[license-url]: https://github.com/Pieter-stack/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Pieter-stack
