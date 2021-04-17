# User profile App
This application shows data of various users and on clicking on "View Profile" it opens up a particular user profile.

![alt text](https://github.com/Anulekha-Chatterjee/user-profile/blob/main/public/Images/Capture1.PNG?raw=true)
![alt text](https://github.com/Anulekha-Chatterjee/user-profile/blob/main/public/Images/Capture2.PNG?raw=true)
Feature workflow:

Context-API have been used to fetch data from the API and pass data among the child components.

UserList component receives all the data from the API and maps that data into card format to render. On clicking a speicifc profile, it sends back data of that particular profile to the context provider.

UserDetails components only receives the data specific to that user profile and renders it.

Libraries used:
react-bootstrap,
react-router-dom (for routing to a particular profile with the user id in the url)
