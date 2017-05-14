Mongodb Notes

### Mongodb Vocabulary
RDBMS -> Database -> Table -> Row/Record -> Column 
MongoDB -> Database -> Collection -> Document -> field

### Start Mongodb server on Windows
Create folder to store mongodb data. Navigate to that folder, shift + right click to open the windows command prompt in the current folder, type:

```
mongod --dbpath ./
```

You can use `mongo` to connect to the Mongodb server that we just started. The `mongo` command is kind of like the `node` command to give us a environment to run mongo commands.

### Testing
While we are running the test using "npm run test-watch", we should not have our server running, it will interfere with supertest request.