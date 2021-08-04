# unsplash-gallery

Simple Image Gallery powered by express.js and Unsplash Image API 

This is a simple web application inspired by Unsplash, in which a user can view and download any image available on the [Unsplash Website](https://unsplash.com).
Images present themselves in a masonry format inspired by [Dave Masonry](masonry.desandro.com), and styles are by Twitter [Bootstrap 4](https://bootstrap.com). 

## App Usage

Clone the application using the command 

**`git clone https://github.com/ndidodley/unsplash-gallery.git`**

This application uses environment variables which stores credentials like API Tokens and Port numbers. Unsplash API requires an API TOKEN set in the request headers (or send as a query string)
to accept GET or POST requests. You can get a key from  their website (though it is rate limited). Just place your token in the format

**`API_TOKEN = 'YOUR ACCESS KEY'`** 

and you are good to go.

All required dependencies are in the package.json file, so when you are done with the API Token, enjoy!!!

Remember to __fork__ this repo.
``