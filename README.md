# rx-sql
RxJS Implementation of MySQL

```
import { RxSQL } from "rx-sql";
import { createConnection } from "mysql";

db = createConnection({
    host: localhost,
    database: test,
    user: root,
    password: ""
});

let rxsql$ = new RxSQL(db);

rxsql$.query("SELECT * FROM TESTTABLE")
    .flatMap(result => result.col1)
    .subscribe(
        result => console.log(result),
        error => console.log(error)
    );

```