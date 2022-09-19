
import { checkForURL } from "./urlChecker"

export function handleSubmit(event) 
{
    try{
    event.preventDefault()
    alert("Handle submit called!")
    // Clear previous results
    document.getElementById('polarity').innerHTML = ""
    document.getElementById('agreement').innerHTML = ""
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('confidence').innerHTML = ""
    document.getElementById('irony').innerHTML = ""

    // check text from the form field
    let formText = document.getElementById('urlInput').value
    if (!checkForURL(formText)){
        console.log("Bad URL entered!")
    }

    console.log("::: Form Submitted :::")
    }catch{
        console.error(error)
    }

    try{
    //call API using fetch in server
    let apiData = callAPI('', formText)

        .then(apiData => apiData.json())
        .then(function (res) {
            updateHTML(res)
        })
    }
    catch{
        console.error(error)
    }
}

export async function callAPI(url, formText) {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },        
        body: userInput,
    })
    return response
}

/*
<div id="results">
    <div id="polarity"></div>
    <div id="agreement"></div>
    <div id="subjectivity"></div>
    <div id="confidence"></div>
    <div id="irony"></div>
</div>
*/
function updateHTML(res){
    if ("status" in res) {
        console.log("Good sentiment analysis results")
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('agreement').innerHTML = res.agreement
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('confidence').innerHTML = res.confidence
        document.getElementById('irony').innerHTML = res.irony
    }
    else{
        console.log("BAD sentiment analysis results")
        document.getElementById('results').innerText = "BAD sentiment analysis results"

    }
}