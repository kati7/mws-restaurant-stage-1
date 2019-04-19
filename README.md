# Restaurant Reviews Project

This is a web application that provides restaurants' reviews.

## Home Page

On the home page there is a list of available restaurants that can be filtered by a neighbourhood or cuisine. There is also a map provided with the locations of the listed restaurants. The user can acces the restaurant's detail page by clicking on its location on the map or on the list item. 

## Restaurant Info Page

This page has a detailed view of the restaurant including its photo, address, opening hours and the reviews.

## Running the application locally

1. In the main folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`.