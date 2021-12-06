# Superheroes Technical Test for Centribal

# Documentation

* Links to use the app
* Setup using Docker Compose
* Setup without using Docker
* Testing

## Frontend and Backend links

In your browser go to ```https://superheroes-centribal.netlify.app/``` to use the App.

To check the API go to ```https://superheroes-api-centribal.herokuapp.com/```

```/api/v1/test/superheroes``` return all heroes.

```/api/v1/test/superheroes/:id``` returns a hero by using their id. 
## Setup using Docker Compose

1. Close this repository
2. Open a terminal windows in your project directory
3. Run ```docker-compose build```
4. Run ```docker-compose up```
5. Open your browser and go to ```localhost:3000```

You should be all set to test the app locally! 

## Setup without using Docker

1. Clone this repository
2. Open a terminal window in your project directory and change directory to ```/backend```
3. Run ```npm install```
4. Then, run ```npm start```
5. Open another terminal window in your project directory and change directory to ```/frontend```
6. Run ```npm install```
7. then, run ```npm start```
8. Open your browser and go to ```localhost:3000```


## Testing

1. Open a terminal window in your project directory and change directory to ```/frontend```
2. Run ```npm test```


