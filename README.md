# MyDocket

After debtors across the country file their paperwork, updates about their case come from the court via physical mail. Many of our users are getting mail slowly or are moving, causing them to miss update deadlines set by the court.

We need to build an online interface to let our users check their case updates from the court, known as a docket. It should show all of their dockets and highlight the ones most important. Luckily a government contractor has put together an experimental API we can start to use.

## Making Requests to the Docket Provider

To request a bankruptcy case's docket, simply make a GET request to the service url like such:

- `http://0.0.0.0/{case_id}`
- `http://0.0.0.0/18-bk-12345`
- `http://0.0.0.0/20-bk-48293`

The URL of the API will also be provided to you at the time of building the service. To make requests, you will need to pass the following Authorization header:

`XAiB6WLEwejuf6HaQrphxZlknSGftUP-9Ww3q5fZtLU`

You can expect a response like:

```
[
  {
        "description": "INSTALLMENTS APPLICATION APPROVED",
        "key": "installmentsApplicationApproved",
        "status": "INFO", // 'INFO', 'WARNING', 'CRITICAL'
        "date": "2020-01-04T18:47:04.287186+00:00",
        "case_id": "18-bk-12345",
        "text": " Order Granting Application To Pay Filing Fees In Installments"
    },
    ...
]
```

# Setup

### Setup Node & NPM

If you don't already have Node installed, you can install NVM (Node Version Manager) which makes maintaining node versions easy.

Installing NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Now for example you can simply install and use Node v10 by typing `nvm install 10.14.0` and `nvm use 10.14.0`

### Setup Repo Code

With Node installed, clone this repo to your machine and start developing! A skeleton React/Webpack setup with hot-reloading is already made for you in `/frontend`