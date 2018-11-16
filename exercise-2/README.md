# learning-node-api
Developing API with Node.js (Pluralsight Tutorial)

- Exercise 2 - A few more http methods

## Sample Request

Method | URL | Sample Body | Tips
-------|----------|-----------------------------------------|--------------------------
GET    |/players  | None | None
POST   |/players  |{"Id": 5,"fullname": "Michael Jordan","level": "Prof. Basketball Player"| Body content type is application/json
GET    |/players/Michael Jordan| None | 

## Required packages

```
npm i --save-dev express body-parser lodash
```