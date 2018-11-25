# Using JWT Tokens on REST Style Services

required modules
```
npm install --save-dev express jsonwebtoken body-parser morgan
```

client test with curl
```
curl -X GET http://localhost:5556

curl --header "Content-Type: application/json" --request POST --data '{"password":"tiger","username":"scoth"}' http://localhost:5556/login
```

take the token infor from last request and then use it like this...(your token value is different probably)

```
curl -X GET -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNjb3RoIiwiaWF0IjoxNTQzMTc1NTIxLCJleHAiOjE1NDMxNzYxMjF9.QXGklYmPQQkUQEHiUji7Iqg9j3lHdmDzPXdXrQ41zag' http://localhost:5556
```

![snapshot](snapshot.png)