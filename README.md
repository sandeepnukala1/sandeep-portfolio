## Readme
### Special Version of Template for GA Students
#### Template by Alex Merced of AlexMercedCoder.com

After cloning remember to run npm install
## Commands

- ```gatsby develop``` runs dev server

## Netlify/Vercel Deployment Details

- build command: gatsby build
- output directory: public


- Markdown files are read out of the mark folder and injected into the MarkPage component.

- styled components is installed, make your styled components in the styles folder

- you can also style the app using the style.css file in src, the pre-existing styling tries to use BEM naming conventions

- projects are pulled from the projects.json in src/json

- The theme of the page is handled by the layout component in src/layout

- images are being read in the filesystem from the images folder


## Add a Blog Post

- copy an existing markdown in the mark folder and write your post, all markdowns in this folder will be treated as blog posts.

## Add a Project

- Add an additional object in the array in projects.json

## Edit header and footer

- Edit the Layout.js in src/layout

## Edit the main page

- edit the index.jsx

## Gatsby Offline is installed to allow site to be used as PWA
