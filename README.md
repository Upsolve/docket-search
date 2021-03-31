# MyDocket

After debtors across the country file their paperwork, updates about their case come from the court via physical mail. Many of our users are getting mail slowly or are moving, causing them to miss update deadlines set by the court.

**This exercise is to build a very simple interface where a user can put in their case number, their district, and get back updates the court has for their case**. These update entries for a case are known as a "docket". The interface should show all of their dockets and highlight the ones most important.

In order to do this docket search, we're providing an mock API we've created, detailed below!

## Making API Requests to the Third Party, Mock PACER Court Database

All of case updates live on a database within the court system. We've created a mock API for accessing these. To request a bankruptcy case's docket, simply make a GET request containing a case number and district abbreviation to this endpoint: `http://chaos.upsolve.org/{district}/{caseNumber}`

Examples GETs:
- `http://chaos.upsolve.org/azb/18-bk-12345`
- `http://chaos.upsolve.org/nyeb/20-bk-48293`

To see the possible values for district codes, look at `districtList.js`. The pattern for every case number is two digits (shorthand for years end, ex: 2021 > 21), then `-bk-` which stands for bankruptcy case, and lastly 5 random digits. Requests will also require an Authorization header: `XAiB6WLEwejuf6HaQrphxZlknSGftUP-9Ww3q5fZtLU`.

Making a valid request will result in the follow payload structure:

```json
{
  success: true,
  docket: [
    {
      "caseNumber": "18-bk-12345",
      "date": "2020-01-04T18:47:04.287186+00:00",
      "district": "azb",
      "type": "installmentsApplicationApproved",
      "severity": "info",
      "text": " Order Granting Application To Pay Filing Fees In Installments"
    }
  ]
}
```

After you get a handle on the UI you want to build, your application will have to handle an increasingly buggy API vendor. To simulate this, switch your Authorization header: `XYvU5gYDEg5i67MjVdUv5o4wihBsKjbe3_NDYMVMinc`. This will cause ~30% of your requests to get either interal server errors or timed out responses.

# Setup

### Setup Node & NPM

If you don't already have Node installed, you can install NVM (Node Version Manager) which makes maintaining node versions easy.

Installing NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Now for example you can simply install and use Node v14 by typing `nvm install 14.14.0` and `nvm use 14.14.0`

### Backend API Server

Feel free to use any backend languages/frameworks you want to run your web server and handle request/responses. We've initialized a Node backend for you, just `cd ./backend && npm start`

### Frontend SPA

We expect you to use a modern framework to build out the UI for users to request their case docket.

To simplfy configuration and setup the [Parcel](https://parceljs.org/) bundler for you in `/frontend`. Basically, Parcel lets you write your SPA with Typescript, your favorite libraries, with image importing, CSS module loading, etc. without any configuration. It just works. Here are examples of different frameworks being used with Parcel:

- [Parcel + React](https://en.parceljs.org/recipes.html#react)
- [Parcel + Vue](https://en.parceljs.org/vue.html#vue)
- [Parcel + Svelte](https://en.parceljs.org/recipes.html#svelte)
- [Parcel CSS Handling](https://en.parceljs.org/css.html#css)

To star developing the frontend, you can simply `cd ./frontend && npm start` and your site will load + hot-reload on `localhost:1234`.
