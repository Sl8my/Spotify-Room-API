# Spotify-Room-API
Full-Stack project using React, Django and the Spotify API.

Create a room, share the code with your friend and let them decide the music.

![](https://github.com/Sl8my/Spotify-Room-API/blob/master/Spotify-Room-GIF.gif)


## Setup Instructions

### Install Required Python Modules

```bash
pip install -r requirements.txt
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```

### Start Web Server

To start the web server you need to run the following sequence of commands.

First cd into the folder "Spotify-Room-API"
```bash 
cd Spotify-Room-API
```
Next run the django web server.
```bash
python manage.py runserver
```
