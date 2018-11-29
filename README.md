## Unit testing Express Routes
A sample setup to show how to write Unit tests for Express routes in a production grade setup.
The sample endpoint serves the json with a `timeout` to mimic a slow asynchronous call.


#### Instructions
Clone this repo. It has the following structure.

```bash
.
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── api
│   │   ├── index.js
│   │   └── users.js
│   ├── app.js
│   └── index.js
├── tests
│   ├── helpers
│   │   ├── globals.js
│   │   ├── interceptors.js
│   │   └── users.sample.json
│   └── users.tests.js
└── yarn.lock
```
Install all dependencies with
```bash
> yarn install
```

#### Commands
```bash
# To run Server in watch mode
> yarn start
```
When you start the server, you can open [http://localhost:3000/users/all](http://localhost:3000/users/all) to see the sample data embedded in the code.


```bash
# To run tests
> yarn test

yarn run v1.12.3
$ mocha --exit --require ./tests/helpers/globals.js --require ./tests/helpers/interceptors.js --require @babel/register tests/*.tests.js


  .../unit-testing-express-routes/tests/users.tests.js
    ✓ test users endpoint (1032ms)


  1 passing (1s)

✨  Done in 2.31s.

```

  