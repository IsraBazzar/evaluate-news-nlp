import { checkURL } from '../src/client/js/urlChecker'

describe("URL validate function", () => {
    //Test true result when url is valid
    test("Valid URL", () => {
        const input = "https://github.com/"
        expect(checkURL(input)).toBe(true)
    })

    test("Invalid URL includes space", () => {
        const input = "https://git  hub.com/"
        expect(checkURL(input)).toBe(false)
    })
    test("Invalid URL with protocol not at start", () => {
        const input = "example.http:com"
        expect(checkURL(input)).toBe(false)
    })
})
