# TFT Team Builder
TFT Team Builder is a fullstack app meant to help you organize your teams for the game Teamfight Tactics.
Click on champions to check out which traits they have and how much they cost. Add your champions to your team that you name on the team creation page. Save your favorite teams.

[GitHub](https://github.com/jyang1003/TFT-teamBuilder)


# Login
- Hashed password
- Required login to access content/pages
- Create a username and password

# Installation
1. Fork and clone code to your terminal
2. Run `npm install` in your terminal


# Wireframes
### Login
![Login](readmePics/Login_Wireframe.png)
### History
![History](readmePics/History_Wireframe.png)
### Favorites
![Favorites](readmePics/Favorites_Wireframe.png)
### New Team
![newTeam](readmePics/newTeam_Wireframe.png)
### Champion Data Screen
![champData](readmePics/champData_Wireframe.png)

# ERD
![ERD](readmePics/ERD_Table.png)

# Tech Stack
- Postgres
- Express
- NodeJs

# API
An API was not used. Instead, static data was used and reformatted to better suit this app. 

# Examples of Data
        ```"championName": "Karma",
        "championId": "19",
        "cost": 4,
        "traitOne": "Dawnbringer",
        "traitTwo": "Invoker",
        "traitThree": null 
        ```

## MVP GOALS
- Have a login page as the home page
- Have a team history page 
- Have a page to view all teams built
- Have a page to view champion details
- Have a favorites page with remove from favorites button
- Have buttons to add champs to team


## STRETCH GOALS
- Implement items to add on to champions
- Add a match history to save teams from actual games
- Implement synergies functionality
- Add in Hextech Augments
- Have a team building page with drag and drop

## POTENTIAL ROADBLOCKS
- Need to learn how to seed data and mass import into database
- Figuring out how to implement drag and drop