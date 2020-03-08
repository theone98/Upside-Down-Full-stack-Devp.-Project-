# Upside-Down
A basic messaging app built to demonstrate the full stack(client, server, database).  
with the following feature
#
1.user can send a new message
#
2.user can see all other messages by other users


![ud](https://user-images.githubusercontent.com/37223519/76159551-cc840d80-6147-11ea-9b31-1e8117e0f318.gif)

**Objectives**
#
 1.📝 Diagram the Full Stack  
 2.🔎 Differentiate between Client and Server  
 3.⌨️ Get user input on the Client  
 4.➡️ Send user input from the client with fetch to the server  
 5.🗃 Store data in a database  
 6.🔍 Retrieve data from a database on the Server  
 7.⬅️ Retrieve data from a server on the client using Fetch  
 8.🙈 Hide/Show elements on the client  
 9.✨ Add elements to the page on the client  
 #
 **Front-end**
 #
 1.Create client folder  
 2.Setup index.html  
 3.Bring in Skeleton CSS  
http://getskeleton.com/  
https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css  
 4.Create Header  
 5.Create form  
 Name  
 Content  
 u-full-width to both inputs  
6.Listen for form submit  
7.Hide the form  
 8.Show loading spinner  
 9.Get data from form and log it  
10.✅ Get user input on the Client  
11.✅ Hide/Show elements on the client  

#
**Back-end**
#
 1.Create server folder  
 2.npm init -y  
 3.npm install express morgan  
 4.Setup index.js  
 5.Add GET / route  
 6.Add POST /mews route  
 7.log out req.body  
 #
 **Front-end**
 #
 1.fetch POST /mews with form data  
 2.See the CORS error and revel in this moment  
3.✅ Send user input from the client with fetch to the server  
#
**Back-end**
#
 1.npm install cors  
 2.Make sure the server is recieving the data  
 3.Add JSON body parser middleware  
 4.Validate name and content  
 5.Must be a string  
 6.Cannot be empty  
 7.If not valid  
 8.Error code 422  
 9.Invalid mew, must contain name and content  
 10.Setup DB Connection  
 11.npm install monk  
 12.connect to db  
 13.create document collection (mews)  
 14.If Valid  
 15.Create mew object with  
 16.name, content, created_date  
 17.Insert into DB  
 18.Respond with created mew object  
19.✅ Store data in a database  
#
**Front-end**
#
 1.Log out created Mew after POST request  
 2.Show the form  
 3.Hide loading spinner  
 
 #
 **Back-end**
 #
 1.GET /mews  
 2.Respond with mews from DB  
3.✅ Retrieve data from a database on the Server  

#
**Front-end**
#
 1.fetch GET /mews  
 2.Iterate over array  
 3.Append each to page  
 4.Reverse before appending  
 5.Show the form  
 6.Hide loading spinner  
 7.fetch GET /mews after creating a mew  
8.✅ Retrieve data from a server on the client using Fetch  
9.✅ Hide/Show elements on the client  
10.✅ Add elements to the page on the client  
#
**Back-end**
#
 1.npm install bad-words  
 2.Use filter before inserting into DB  
 3.npm install express-rate-limit  
 4.Limit to 10 request every 10 seconds  
