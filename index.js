let express = require('express');
let consolidate = require('consolidate');
let path = require('path');
let axios = require('axios').default;
let bodyParser = require('body-parser');
require('dotenv').config({path:__dirname + '/.env'});
let logger = require('morgan');

let app = express();

// Setting up the express application configuration
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Configuration of static files and middleware

app.use(bodyParser.json());
app.use(logger('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname, +'/public'));


access_key = process.env['API_TOKEN'];
axios.create({
    headers: {
        Authorization: `Client-ID ${access_key}`
    }
})


async function getImages(query, limit, orientation) {
    try {
        return await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: query,
                per_page: limit,

                client_id: access_key

            }
        });
    } catch (e) {
        console.log(`The following errors occurred ${e}`);
    }
}

app.get('/', (req, res) => {
    getImages('cobra' , 15, 'portrait').then(
        (x) => {
            try {
                let results = x.data;
                return res.render('index', results);
            }catch (e) {
                console.log(`The following error(s) occured ${e}`);
            }
        }
    );
})

app.listen(3000, () => {
    console.log('App listening at port 3000');
});