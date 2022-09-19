const dotenv = require('dotenv');
dotenv.config();

console.log(`MeaningCloud API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const name = require('meaning-cloud')
const baseURL = "https://api.meaningcloud.com/sentiment-2.1"

const app = express()
app.use(express.static('dist'))
/*
// Spin up the server
const port = 3000;
app.set('port', port);
const server = app.listen(port, listening);
 function listening(){
    console.log(server);
    console.log(`ReadBot is running on localhost: ${port}`);
  };
*/
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', callMeaningAPI )

async function callMeaningAPI(req, res) {
    userInput = req.body.urlInput;
    console.log(`You entered: ${userInput}`);

    const apiURL = `${baseURL}key=${process.env.API_KEY}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    try{
            const meancloudData = await response.json()
            console.log(meancloudData)
            
            // server sends only specified data to the client with below codes
            const projectData = {
                score_tag : meancloudData.score_tag,
                agreement : meancloudData.agreement,
                subjectivity : meancloudData.subjectivity,
                confidence : meancloudData.confidence,
                irony : meancloudData.irony
            }
            res.send(projectData);
    } catch (error){
        console.error(error)
    }
    
}


