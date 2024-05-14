Apps Needed:
XAMPP - Database
Visual Studios - (Not Neccisary to run the code but would be ideal to view the code)
Node - Needed to open the server

Follow the installaltion process, no changes need to be made.

How to Run the App:
Step 1:
Go to your download folder (Should automatically take you if you enter this in your file explorer):
C:/Users/%userprofile%/Downloads/

Step 2:
You will find a folder called Task2-Code_000013019_Downes_J or Task2-Code_000013019_Downes_J.zip depending on what you downloaded.

If it has .zip at the end, extract the folder into Downloads then follow the next step. If not then follow step 3.

Step 3:
Open the file and copy the file location. If you don't know how to do this then follow the next step, if you do, go to step 5.

Step 4:
Right click on the folder and select properties and then copy the location.

Step 5:
Open up the command prompt and run the command:
cd "YOUR_FILE_LOCATION"
and replace YOUR_FILE_LOCATION with the location that you copied previously.
and then run the next command
cd Task2-Code_000013019_Downes_J

Step 6:
Run the command
npm i
This will install the dependencies in the package.json located in the folder, if this file is not here then reinstall the initial folder, if package.json still isn't there then run this command:
npm i body-parser cors express mysql react react-dom react-hot-toast react-router-dom stripe styled-components

if that doesn't work check that you have installed node correctly
I'm using node version v18.17.0 but that shouldn't matter too much.
Check that node is installed by running the command:
node -v
and it should come back with the version (for example 'v18.17.0') if it doesn't look like that then you have not installed node correctly and if your still stuck, follow a quick (or in depth) tutorial.

After running 'npm i' run the command
npm run dev
you may have seen other people use npm start but I'm using vite which uses the default script 'npm run dev'.
If you want to view the command, go into the package.json and under 'scripts' it should say 'dev'.

That should be the frontend and run on port 5173 but it would say specifically what port it is on.

Step 7:
Open up XAMPP and launch (click on Start) Apache and MySQL.
If MySQL fail, it may be because you closed the app without closing the port. If this happens close the port by running the command (ON WINDOWS, if your on any other operating system I cannot help you, search up how to close a port on YOUR_OPERATING_SYSTEM). If this doesn't happen then continue to step 8.
netstat -ano | findstr 3306
3306 is the port that MySQL loads on
You will then see a bunch of 4 digit numbers, then run the command
taskkill /PID YOUR_PID_NUMBER_HERE /F
where YOUR_PID_NUMBER_HERE is the number that you see

If you run into any other errors, view the Logs to see what is wrong.

Step 8:
Now open the my.ini by pressing config in the MySQL section and where it says
password     = your_password
change it to
password = Turkish-snooze-tumbrel-reagent-aster-photo-hecatomb-impure-sedate
and then save it and close the file
Next run the command to set the XAMPP terminal to allow you access using the password:
mysqladmin.exe -u root password Turkish-snooze-tumbrel-reagent-aster-photo-hecatomb-impure-sedate

Step 9:
When Apache and MySQL are running then open go onto your browser and enter in the search bar
localhost/phpmyadmin
and create a database called
rza_db
You can do this by pressing 'New' on the left hand side

Step 10:
Open another terminal, go to the location the file is saved then run the command
cd Database
and then to launch the server run the command
node Server.js

You should see that the shell has automatically created the tables neccisary

Step 11:
EXPLORE THE WEBSITE