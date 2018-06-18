# rx-sql

[![Build Status](https://travis-ci.org/inf3cti0n95/rx-sql.svg?branch=master)](https://travis-ci.org/inf3cti0n95/rx-sql)

RxJS Implementation of MySQL

```js
import { RxSQL } from "rx-sql";
import { createConnection } from "mysql";
import { flatMap } from "rxjs/operators";

let db = createConnection({
  host: "localhost",
  database: "database",
  user: "root",
  password: "password"
});

let rxsql$ = new RxSQL(db);

rxsql$
  .query("SELECT * FROM table")
  .pipe(flatMap(result => result))
  .subscribe(
      result => console.log(result),
      error => console.error(error)
      () => console.info("Completed!")
      );
```
