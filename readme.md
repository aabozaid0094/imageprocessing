#Image Processing
##Resizing image to selected aspects
*node
*typescript
*express


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Endpoints](#endpoints)

## General info
This project is used to resize image to selected aspects
	
## Technologies
Project is created with:
* Nodejs: 16.15.0
* Typescript: 4.6.4
* Expressjs: 4.18.1
	
## Setup
To run this project, install it locally using npm:

```
$ npm run build //to rebuild project, update js files
$ npm run test //to test project
$ npm run start //to start the node server
$ npm run combostarter //to run prettier then lint then build then run the tests then start the node (built js) server
```
then surf localhost:3000

## Endpoints
Project has these endpoints:
* /api/images: localhost:3000/api/images/ and can take parameters of filename(string)/width(number)/height(number), consider the following example localhost:3000/api/images?filename=encenadaport&width=300&height=200
* /api/thumbs: to see existing/created thumbnails and can take parameters of clearThumbs(true), consider the following example localhost:3000/api/thumbs?clearThumbs=true