# Internship-Test-BotDistrikt

1. Database Design  
Using the models provided :  
books :
{ 
  "title": String,
  "publisher": String,
  "year": Number,
  "authorId": String
}  
author : {
  "name": String,
  "biography": String
}  
I decided that **"authorId"** in **books** should be a foreign key that refers to **"name"** in **author**  
***Trade-off:*** **"name"** in **author** has to be unique which means that there cant be 2 authors with the same name which is not true in real life

2. Backend Design  
For the reading of books from the database, use **"authorId"** to find so that the frontend is able to showcase the authors along with the books that is associated  

3. Frontend Design  
Arranged authors and books by earliest creation date and time because I feel that it is what most people would rather  
***Trade-off:*** latest creation of author or book would appear at the end 
