import { handleSubmit } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
// The test() function has two arguments - a string description, and an actual test as a callback function.  

describe("Check connection to the server", () => {

    test("Should return the mock API from the server file", async () => {

        fetch.mockResolvedValue({
            'title': 'test json response',
            'message': 'this is a message',
            'time': 'now'
        })
        const data = await getAnalysis('http://localhost:3000/test', "https://www.udacity.com")
        expect(data).toEqual(
            {
                'title': 'test json response',
                'message': 'this is a message',
                'time': 'now'
            }
        )
    })
})
});

