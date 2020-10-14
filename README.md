# website

Codebase for the Cyber Institute website https://cyber.anu.edu.au/

## Development build
pull the latest version of the code from the repo (`git pull`)  
Run `npm install` then run `npm run start-dev`  
Go to localhost:8080 in your browser to view.

## Production build
Code is hosted on aiedge.cecs.anu.edu.au in /var/www/cyber.anu.edu.au
Run `npm install` then run `npm run build` on the server.  
Go to https://cyber.anu.edu.au/ to view

## Repository Breakdown

### Quote
Pretty sure this folder is not in use currently.

### img
Contains all of the images on the website.  If you wish to add a new image to a page, add to this folder and then import into the required component.

### js
Contains the code powering swirly lines on the home page.  Shouldn't need to be altered unless the lines are being removed/changed in some way.

### src
Contains code for the project. See src README.md for full breakdown of the codebase

## Server Information
- Server is hosted by ANU
- The website is fronted by a proxy server. This maps the server port 3000 to port 443. It also contains the ssl certificate for the site.
- www.cyber.anu.edu.au does not currently resolve as DNS needs to be updated

## Access to server
- You will need to add your ANU user id to the aidedge-users or aiedge-sudo group in the ANU active directory
- Raise a ticket with the CECS IT helpdesk to do this
- Someone with sudo access will then need to run the following command on the server to add your user account

`export NEWID=u1234456
cd /home/users
cp -a /etc/skel $NEWID
chown -R $NEWID.users $NEWID`

- ssh to the server using your userid@aiedge.cecs.anu.edu.au and your ANU username and password

