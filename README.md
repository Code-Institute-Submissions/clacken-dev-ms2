## TravelMate Website
----

[View the live project here](https://clacken-dev.github.io/ms2)

This is the main website for TravelMate, a company designed to help holiday makers choose a destination
for their next holiday and provide them with useful information about their location when on holiday.

# User Experience (UX)

* ## User Stories
    * First Time Visitor Goals
        * As a First Time Visitor to the TravelMate site I want to easily understand the purpose of the site and be informed about the available functionality of the site 
        * As a First Time Visitor I want to be able to easily navigate through the page, interact with it and have it respond how I 
        expect it should respond.
        * As a First Time User I want to find relavent information about potential holiday destinations 
    
    * Returning Visitor Goals
        * As a Returning Visitor I want to find holiday information again about new locations 
        * As a Returning Visitor I want to be able to get in contact as I may be interested in holidays bookings and inclusive packages
        * As a Returning Visitor I want to use the explore feature as I may be on holidays or looking to find local attractions

    * Frequent User Goals
        * As a Frequent User I want to check destinations and be informed of the attractions of each destination and make comparisons for the ideal location
        * As a Frequent User I want to use the explore page to find local attractions and nearby features 
        * As a Frequent User I want to use the contact page to book a call so that I can organise a holiday, maybe on a bi-annual or annual basis

* ## Design 
    
    * Colour Scheme
        * The colour scheme used was based on an Adobe Colour colour palette which uses colours from a tropical beach scene. The palette is availabe [here](https://color.adobe.com/trends/Travel). 
     The use of these colours will subconsiously invoke images of warm climates, clear oceans and sandy beaches in the user's mind as they tie together with the site theme and also perfectly complement each other.

    * Typography
         * The typography for this is minimal and simple so as to focus the user first on the colours used and the map features and functionality. The font used for the whole site is Karla, an elegant font
    with a clean look and nice spacing to give a fresh and spacious feel to text and content. 

    * Imagery
        * The imagery is very simple on this site, again to keep the focus on the travel destination and not distract from the site functionality. The hero image is bold and designed to 
        catch the user's attention and give them good feelings of warm climates and the relaxation of a nice holiday. This image is repeated in smaller form across the pages for continuity but it's main
        purpose is the dramatic effect of the almost-full-screen hero image. 


* ## Wireframes

The original concept was fluid and gradually took shape after the project inception and first example of a wireframe. 
The wireframe for the index page initially had a different layout and as the project grew and different options were tried 
these were updated to better fit the improved design. The original wireframe for the home page is below, followed by the updated
wireframes for the current design of the site.

Originally, as seen in the first wireframe, the site design was to have a search box which would return a limited supply of places. The user would then be able to choose one and 'book' a holiday using the site. 
With the integration of the Google Places API the functionality outgrew this limited design and the updated wireframes reflect this change. 

* First example of Home page wireframe - [view](https://github.com/clacken-dev/ms2/blob/master/documentation/wireframe-index.png) (wireframe is horizontal and needs to be scrolled to view in its entirety)
* Home Page Wireframe - [view](https://github.com/clacken-dev/ms2/blob/master/documentation/ms2-index-current.png)
* Explore Page Wireframe - [view](https://github.com/clacken-dev/ms2/blob/master/documentation/ms2-explore.png)
* Contact Page Wireframe - [view](https://github.com/clacken-dev/ms2/blob/master/documentation/ms2-contact.png)

# Features 
 * Responsive on all device sizes
 * Interactive elements
 * Integrated APIs for maps, nearby searches and transport
 * Feedback on real-time location of User

 # Technologies Used

 ## Languages Used
  * HTML5
  * CSS3
  * Javascript 

## Frameworks, Libraries & Programs Used

1. Bootstrap 4
   * Bootstrap was used to aid with the design and layout of the site and to assist with responsiveness across screen sized.
2. jQuery: 
   * jQuery was used in testing of different APIs for making requests and also for requesting and setting element content of the DOM.
3. Google Fonts:
   * Google Fonts was used to import the Karla font used across the site. 
4. Git
   * Git was used for version control of the project from its inception by using Gitpod terminal for making commits and pushing to the GitHub repository.
5. GitHub:
   * GitHub was used to store the code repository as it was updated in Gitpod and pushed from Git.
6. Balsamiq:
   * Balsamiq was used to create the wireframes(add link to wireframes ? ) during the design process of the project.
7. Google Maps API
   * The Google Maps Javascript API was used and with it other Google Maps libraries such as Places, Autocomplete, NearbySearch and similar features
8. Moovit Travel app
   * The Moovit Travel app was embedded as a widget and customized to suit the site's needs of providing the user with transport options.

# Testing

The W3C Markup Validator and W3C CSS Validator services were used for every page of the website to ensure there were no
syntax errors in the code. 

  * W3C Markup Validator - [Results](https://github.com/clacken-dev/ms2/blob/master/documentation/html-valid-ms2.png)
  * W3C CSS Validator - [Results](https://github.com/clacken-dev/ms2/blob/master/documentation/css-valid-ms2.png)
  * [BeautifyTools](https://beautifytools.com/javascript-validator.php) was used to check over Javascript and look for issues and errors - Jshint service was unavailable

## Testing User Stories from User Experience (UX) Section
Here I go through all the user stories and how every wish of the user was tested to see if it worked as they wanted, without errors
Beef this up a lot and talk extensively about the testing which was carried out. Talk about every issue and how it was resolved to give the 
ultimate user experience. 

 * ### First Time Visitor Goals 
   1.  As a First Time Visitor to the TravelMate site I want to easily understand the purpose of the site and be informed about the available functionality of the site 
      * The hero image is big and bold and lets the user know the site is to with travel and holidays. The text tells them that they can search for their next holiday destination and there
      is a button which is clear and easy to read which tells them they can use it to search for a location. This will give the user a clear idea of the site's purpose and how they can start using it
      * If they click the button it will scroll them down the page where there are clear instructions on how to use the search bar and map. If they scroll past the button without clicking it they will see
      for themselves the purpose of the search bar and map and will learn the available responses after interacting with it once. 
      * Below the map are some tabs which they can use to navigate through their results. If they click these before searching they are told they must search first. Navigation here is easy and information
      returned to the user is clear to read and gives a good idea of the type of results they can expect from using this search feature 
      * Below this section there is an area with different colour which a user will know instinctively is conveying new or different information. This section tells them clearly there is another feature they can
      use on the 'Explore' page and also that there is a contact page which they can use to get in touch. 

   2. As a First Time Visitor I want to be able to easily navigate through the page, interact with it and have it respond how I expect it should respond.
      * The site uses conventional navigation which most First-Time users will understand from experience of other sites and applications. Most mobile users who are using the site
      for the first time will know that the hamburger icon will open a dropdown menu and that those menu links can be clicked to navigate to different areas of the site. 
      * The location buttons which are above the map are labelled and have an explanatory note above them. Users interacting with this area will therefore expect the map to show the location as described 
      on the button and to see information below about that location. This behaves as they expect therefore. 
      * After using the search feature once the user wil become accustomed to how the search feature works and what results they can expect to see for a location. This happens the same way every time and 
      provides a nice user experience for them. The buttons and links all work and every button has a description. The section which invites them to try to the Explore page or go to the Contact page will redirect
      them to a new page as the user will expect. 
      * A user who chooses to fill in the contact form will expect confirmation of submission from experience and this confirmation is provided to them. Submitting a form clears the screen and they get a message telling
      them that the form has submitted. 
      * Most users expect that clicking on a site's logo will bring them to the home page and this is exactly how the logo on TravelMate works also. Clicking on the footer link brings them to the developer's page as they would also expect

   3. As a First Time User I want to find relavent information about potential holiday destinations 
      * After reading the description of how the search feature works a user will see that information is displayed below the map and also categorised. They know that every search they 
      make will return results in those categories and they can decide then if the area they are looking at has enough tourist attractions for them. 

* ### Returning Visitor Goals 
  1. As a Returning Visitor I want to find holiday information again about new locations 
     * A returning visitor will know quickly and easily how to find information about new locations and can simply hit the 'Search Now' button and start looking at locations they have in mind
     * The user may remember from previous use that information is in specific categories or else they will quickly become re-accustomed to how the results are presented when searching for locations

  2. As a Returning Visitor I want to be able to get in contact as I may be interested in holidays bookings and inclusive packages
     * The returning visitor can use the menu to navigate to the contact page or scroll down and use the button which will bring them there. 
     * The user will see clearly labelled input fields on the contact form and understand the format of the information required and how to submit it when they are ready
     * After a user has submitted the contact form they will get confirmation if it was successful or get a message if there was an error. They will therefore know that they either need no further action and that 
     a travelMate representative will be in contact with them or that they must resubmit the form. 

  3. As a Returning Visitor I want to use the explore feature as I may be on holidays or looking to find local attractions
    * A Returning Visitor will probably have seen the Explore page mentioned on the home page of the site or may have navigated the site to see all available functionality. Thus they will know the page exists and how to get there. 
    * A user who wants the use the explore page simply has to navigate there and the page will display there location and the relevant information. No inputs are required from the user and they can therefore see immediately what is on offer
    in their current location. 
    * They will be familiar with the layout of the tourist attractions from the home page search feature and can quickly and easily navigate through the tabs to see the information

* ### Frequent User Goals
  1. As a Frequent User I want to check destinations and be informed of the attractions of each destination and make comparisons for the ideal location
     * A frequent user will be familiar with the site design and features and can quickly and easily search destinations and see the information returned.
     * They will be aware of the information layout and can take note of relevant information and make their decisions about their holiday

  2. As a Frequent User I want to use the explore page to find local attractions and nearby features 
     * A frequent user will know that the explore page uses their current location and will easily be able to navigate here any time they want information about attractions in there area 
     * They will know they can use this feature any time and can use at home and abroad to explore any area based on their location 

  3. As a Frequent User I want to use the contact page to book a call so that I can organise a holiday, maybe on a bi-annual or annual basis
   * A frequent user will be familiar with the contact process and may have already used it in the past when enquiring about a holiday 
   * They will be able to find their way to the contact page with no issues and can fill in their information and click submit on the form. They will get confirmation if their form 
   submission was successful and will know from experience that a call will follow up shortly, during which they can book their desired holiday 

# Further Testing
 
 * This site was tested on Chrome, Safari, Firefox and Opera
 * The site was tested on Mac OS, Android and iOS
 * The link was shared to some friends and the site displayed for friends to offer feedback and see if all functions performed as expected

 ## Testing of functionality 
  
  * All links and buttons were clicked and all interactive elements were tested to ensure they worked. The largest part of testing however was in the development stage to 
  get the various APIs to function as desired and to incorporate properly. The Google Maps Javascript API is an enormously feature-rich API with hundreds of pages of documentation. The learning curve was 
  therefore very steep and adapting it to function exactly as desired took days and days of testing and changes and updates. The Maps API has many libraries and features built into it and these were also necessary to 
  make the site work. The original design of the site was to have the user type a location into the search bar and use the Geocoding feature of Google Maps API. This feature was implemented and tested at the beginning to check the viability of it
  but it was afterwards decided that the Google Autocomplete function would better suit this site's needs.
  * The search bar went from taking the user's typed result and converting that into coordinates to be passed to the NearbySearch feature of Maps to 
  suggesting locations as the user types and then sending the coordinates of the chosen location to the NearbySearch function. A large amount of testing was involved firstly with the Geocoding feature and digging through the results of the objects returned 
  and also with the Autocomplete feature and how that deals with locations and provides the desired information. The testing involved reading up on the necessary documentation from Google and then implementing different examples of the features and seeing in what 
  way the returned data would work. Initially it proved very difficult to get the desired coordinates and pass them to the next function and afterwards it was messy to try and splice and join strings of location coordinates to try and get the coordinates into the correct
  format for the Search feature. All of this was worked out and it was then a matter of making the NearbySearch perform as desired and display relevent results. There are a huge number of availabe search parameters so I chose some which seemed like the best fit for 
  a user looking to go on holidays. Many tests were carried out to see what options gave the best results and what search radius was relevant also. When these were worked out the user's search, Autocomplete feature and NearbySearch feature were all working seamlessly to display
  information to the user about a specific place they searched for. 
  * The Moovit travel app was added to provide a transport option for users and this needed to be tested also as it came originally with pre-programmed settings such as origin and destination. It is also not designed as a client-side consumable API and they only provide a 
  widget to be used on a site. Configuring this widget and getting it to work correctly took further testing to ensure it was worthwhile to include it and it now does give the user the option of searching for transport in there area. 
  * The Explore page built upon the testing and work done for the Home page but needed to be given the user's location instead of the user searching for one. Testing was done to get this feature working correctly and implemented the W3Schools location retrieval function. Most user's 
  will need to manually give permission to their browser to obtain their location but testing showed that after that is done the feature works without problems and generates the map with no issues after passing it the user's location as arguments for the map function.
  * The location search buttons were added before a lot of the Google Maps functionality and it was thought that they could be used if the Place search didn't work as required. Testing these buttons showed it was possible to display a location with them but if there was only buttons and no search 
  feature the site would be very limited in the potential destinations it could provide. They were retained however and upgraded to work with the new system and were very well tested to ensure they perform exactly as desired and expected. 


## Known Bugs

   * Expanding the dropdown navbar on mobile while in landscape view pushes content out of the div and over the text below


# Deployment 

## Github Pages

This project was deployed as a live project to GitHub Pages using the following steps: 

1. Log in to GitHub.com and navigate to the repository of this project
2. At the top of the repository there is a menu bar with a 'Settings' button, click this
3. GitHub has updated the GitHub Pages section to it's own tab so either scroll down the first settings page for the redirect link or click the 'Pages' tab on the left-hand side
4. Select the master branch as the source and publish the site
5. Follow the generated link to view the live project

## Forking the GitHub repository

By creating a fork of the GitHub repository for this project it's possible to create a copy of the original repository on your own GitHub account which
can be used to view and/or make changes without having an effect on the original GitHub repository. This is done using the following steps:

1. Log in to GitHub.com and navigate to the relavent repository
2. At the top right of the page there is a 'Fork' button
3. Clicking this will create a copy of the original repository

# Credits 

## Code
 * Some large sections such as the Maps api functions were used from outside sources and are attributed in the code. 
 These adapted code blocks were found in the [Google Maps Javascript API documentation](https://developers.google.com/maps/documentation/javascript/placeshttps://developers.google.com/maps/documentation/javascript/places) 
 * [Bootstrap4](https://getbootstrap.com/docs/4.1/getting-started/introduction/): The bootstrap library was used to add responsive styling and interactive elements such as buttons and navbars


## Content
 * All content was written by the developer unless stated in the code comments. 
## Media
 * The hero image used on this site came from Unsplash.com

## Acknowledgements
 * My mentor for his valuable feedback and support
 * The Slack community for their help with queries and problems