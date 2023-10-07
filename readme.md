# Introduction
This repository is built using lerna monorepo, worktop and faunadb

# Instructions
- Clone this repository and run `npm install` at the project folder terminal
- Applications are grouped inside the `packages` folder. To create an application simply run this command at the project root folder:
  ```
  wrangler init <application_name>
  ```
  For example:
  ```
  wranger init faunadb-products-api
  ```
- Environment variable is per application based. To create an environment variable and store it in Cloudflare worker, open up terminal, from the project root folder, head over to one of the applications, e.g. `cd packages/faunadb-products-api`, and then run:
  ```
  wrangler secret put <ENV_NAME>
  ```
  For example:
  ```
  wrangler secret put FAUNA_SECRET
  ```
- Deployment is per application based. To deploy an application to Cloudflare Worker, open up terminal, from the project root folder, head over to one of the applications, e.g. `cd packages/faunadb-products-api`, and then run:
  ```
  wrangler deploy
  ```

# References

## Tutorial
https://developers.cloudflare.com/workers/tutorials/manage-projects-with-lerna/

## Fauna FQL
https://docs.fauna.com/fauna/current/fql_reference/

## FaunaDB JS Driver
https://fauna.github.io/faunadb-js/