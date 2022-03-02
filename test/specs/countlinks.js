const fetch = require('node-fetch');

describe('link tests', function() {
    it('check the page for broken links', async function () {
        browser.url('/status_codes/200');

        // get all the links on the page
        const links = $$('a');

        const urls = links.map(link => link.getAttribute('href'));

        const requests = urls.map(url => fetch(url));

        const responses = await Promise.all(requests);

        const statusCodes = responses.map(response => response.status);

        statusCodes.forEach(statusCode => {
            expect(statusCode).to.be.below(400);
        })
    });
});