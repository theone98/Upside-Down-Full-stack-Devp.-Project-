# Upside-Down
A basic messaging app built to demonstrate the full stack(client, server, database).

#
with the following feature
#
1.user can send a new message
#
2.user can see all other messages by other users


![ud](https://user-images.githubusercontent.com/37223519/76159551-cc840d80-6147-11ea-9b31-1e8117e0f318.gif)

**Objectives**
#
 📝 Diagram the Full Stack  
 🔎 Differentiate between Client and Server
 ⌨️ Get user input on the Client
 ➡️ Send user input from the client with fetch to the server
 🗃 Store data in a database
 🔍 Retrieve data from a database on the Server
 ⬅️ Retrieve data from a server on the client using Fetch
 🙈 Hide/Show elements on the client
 ✨ Add elements to the page on the client
 #
 **Front-end**
 #
 Create client folder
 Setup index.html
 Bring in Skeleton CSS
http://getskeleton.com/
https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
 Create Header
 Create form
 Name
 Content
 u-full-width to both inputs
 Listen for form submit
 Hide the form
 Show loading spinner
 Get data from form and log it
✅ Get user input on the Client
✅ Hide/Show elements on the client

#
**Back-end**
#
 Create server folder
 npm init -y
 npm install express morgan
 Setup index.js
 Add GET / route
 Add POST /mews route
 log out req.body
 #
 **Front-end**
 #
 fetch POST /mews with form data
 See the CORS error and revel in this moment
✅ Send user input from the client with fetch to the server
#
**Back-end**
#
 npm install cors
 Make sure the server is recieving the data
 Add JSON body parser middleware
 Validate name and content
 Must be a string
 Cannot be empty
 If not valid
 Error code 422
 Invalid mew, must contain name and content
 Setup DB Connection
 npm install monk
 connect to db
 create document collection (mews)
 If Valid
 Create mew object with
 name, content, created_date
 Insert into DB
 Respond with created mew object
✅ Store data in a database
#
**Front-end**
#
 Log out created Mew after POST request
 Show the form
 Hide loading spinner
 
 #
 **Back-end**
 #
 GET /mews
 Respond with mews from DB
✅ Retrieve data from a database on the Server

#
**Front-end**
#
 fetch GET /mews
 Iterate over array
 Append each to page
 Reverse before appending
 Show the form
 Hide loading spinner
 fetch GET /mews after creating a mew
✅ Retrieve data from a server on the client using Fetch
✅ Hide/Show elements on the client
✅ Add elements to the page on the client
#
**Back-end**
#
 npm install bad-words
 Use filter before inserting into DB
 npm install express-rate-limit
 Limit to 10 request every 10 seconds
