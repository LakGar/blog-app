# Blog App
<img width="1701" alt="Screenshot 2023-09-22 at 12 25 09 PM" src="https://github.com/LakGar/blog-app/assets/90293130/4d69ccb5-3b9b-42cb-b0dd-5235989d42c0">
<img width="1701" alt="Screenshot 2023-09-22 at 12 24 53 PM" src="https://github.com/LakGar/blog-app/assets/90293130/4cd3c82b-254d-447e-8d61-9d192398e2dc">
<img width="1701" alt="Screenshot 2023-09-22 at 12 24 42 PM" src="https://github.com/LakGar/blog-app/assets/90293130/a8e6ece9-8ec6-48a9-944c-29d84d44c0f3">



This is a simple blog application built with Next.js, React, and CSS Grid to showcase a responsive Masonry-style layout for blog posts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Masonry-style layout for blog posts.
- Fetches blog data from a server using a RESTful API.
- Responsive design that adapts to different screen sizes.
- Dynamic column count based on screen width.
- Hover effect on blog post containers.
- Clickable blog post links.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com//LakGar/blog-app.git

    cd blog-app
  
Install the project dependencies:


    npm install

Start the development server:

    npm run dev

Open your web browser and navigate to http://localhost:3000 to see the app in action.

Usage

Visit the live application here to see it deployed.

Click on the blog post links to view individual posts.

Deployment
This project can be deployed to platforms like Vercel, Netlify, or GitHub Pages. Be sure to configure your deployment settings accordingly.

Here's an example of deploying to GitHub Pages:

Update the next.config.js file to set the basePath:


    module.exports = {
      basePath: '/blog-app',
    };

Build the project:


    npm run build
Deploy the out directory to GitHub Pages:


    npm run export
    npx gh-pages -d out
    
Access your deployed app at https://yourusername.github.io/blog-app.

Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository on GitHub.
Clone your forked repository to your local machine.
Create a new branch and make your changes.
Push your changes to your fork on GitHub.
Submit a pull request to the original repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.


