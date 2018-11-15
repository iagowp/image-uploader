This is a small image uploader, using node, express, multer for file handling and mongoDB.

To run this project locally, you need to have node, npm and mongo installed.

Download the project, run `npm install`.

Start your mongo server, on Mac, this would be: open a new terminal, and run `mongod`

Add a `.env` file and add your database, something like this: `DB='mongodb://localhost:27017/image-uploader'`

Then run `npm start`. Thats it, you can go to localhost:3000 and check the file uploader.

To run tests, use `npm test`


Warning: test environment is running on same db as dev, so untill fixed, running `npm test` will clean your database.

Warning2: If deployed to a place like heroku, that will not save files added during runtime, your files will be lost. To fix this, you need to upload your files to a service like S3.


Objectives of this project:

Goal: To code an image uploading service.

 

Requirements:

- Must upload an image and know (at least) the image's upload date, a description, and the owner of the image.

- Description and Owner attributes can be free flowing text fields.

- Metadata should be stored in a database.

- Image "files" should not be stored in the Database.

- Upload should respond with a unique URL of a page that will show the image and associated metadata

- This process should be repeatable (i.e., multiple images should be uploadable, each with own metadata and each with it's own unique URL)

 

Bonus points for (optional): 

- Hosting a working copy of your app on Heroku

- Including tests/specs with your submission
