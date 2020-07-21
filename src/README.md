# src repository breakdown

Structure of the website codebase - this should tell you where you need to go to fix things on the website.  
The structure of this document is that each subsection corresponds to a page or element of the website to be changed. The subsection will point you to the relevant directory containing the component code and the action of each file within the repository.  
Note - CSS files with the same names as JavaScript files simply provide style for the component.

## Menu Bar (top of every page)
The code for this is contained in index.js.  To change the mobile (hamburger) menu, edit the component FadeMenu. Otherwise edit the Toolbar section of the App component.

## Footer
Contained in the Footer directory. Pretty self explanatory.

## Banners (at the top of all pages except home)
Contained in pages/Common. Supply the title, subtitle, image and headings and add component to page.

## Home Page
Contained in the Home Directory. Main file is *home.js*.  
The page draws on code from the Quote, BodyMenuItem & BodyMenuItemSwapped directories.  
Quote component renders the section directly under the 'Explore Cyber Institute'  
FirstBanner, SecondBanner & ThirdBanner control the quote sections of the home page whilst the BodyMenuItem components control the parts of the page redirecting you to other sections.

## About Page
In the pages/About directory. All of the code is in *index.js*. HTML has a lot of unnecessary divs but all the code/content is in there.

## People Page
In the pages/People directory. All of the code is in *index.js*. Behaviour of HTML is pretty complex but all the code/content is in there.  
Meet the Team bios can be changed as needed but unfortunately we don't have any extra puzzle piece pictures.  
Similarly, advisory board info can be changed via the Person and personsContent objects in *index.js*.

## Courses Page
In the pages/Courses directory. Page is compiled in *index.js* although separate sections are imported from other .js files in folder.  
Education program can be changed in *index.js*.  
Master of Cyber can be changed in *CyberMasteryContent.js*.  
Graduate Diploma can be changed in the GraduateDiploma object in *index.js*.  
Lists of available courses can be changed in *Courses.js* as well as Developing course format.  
Format of available courses can be changed in *ShortCourseInfo.js*.  
To create course-specific URLs, add the desired id to the ShortCourseInfo or DevelopingCourse component. URL will then be https://cyber.anu.edu.au/courses#**id** .

## Services Page
In the pages/Services directory.  
Structured similar to the Home & Courses pages. File names correspond to named sections of the page.

## Privacy
In the pages/Privacy directory.  
Structured similar to the Home & Courses pages. File names correspond to named sections of the page.

## News and Events Page
In the News directory.  
Main file is news.js. To add items to a particular section go to the coreesponding file in the items directory i.e. to add a new article go to News/items/articles_items.js. Then, add a new object to the top of the array containing all relevant information. This article will then appear as the first article in the section when visiting the website.