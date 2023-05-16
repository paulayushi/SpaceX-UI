describe('Auth api testing', function () {

    it('Validate auth api returns 200 status code and token when passed vaild credential', () => {
        let request = {
            username: "superuser",
            password: "Password@2023"
        };
        cy.request('POST', 'https://localhost:7071/spacex/auth/api/login', request)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.null;
            })
    });

    it('Validate auth api returns 401 status code when passed invaild credential', () => {
        let request = {
            username: "superuser",
            password: "invalid"
        };
        cy.request({
            method: 'POST',
            url: 'https://localhost:7071/spacex/auth/api/login',
            body: request,
            failOnStatusCode: false
          })
          .then(response => {
            expect(response.status).to.eq(401);
        })
    });

    it('Validate auth api returns 400 status code when username or password is null', () => {
        let request = {
            username:'',
            password: ''
        };
        cy.request({
            method: 'POST',
            url: 'https://localhost:7071/spacex/auth/api/login',
            body: request,
            failOnStatusCode: false
          })
          .then(response => {
            expect(response.status).to.eq(400);
        })
    });

    it('Validate auth api returns 404 status code when endpoint does not exist', () => {
        let request = {
            username:'',
            password: ''
        };
        cy.request({
            method: 'POST',
            url: 'https://localhost:7071/spacex/auth123/api/login',
            body: request,
            failOnStatusCode: false
          })
          .then(response => {
            expect(response.status).to.eq(404);
        })
    });
})