import { Connection, QueryOptions } from "mysql";
import { Observable, Observer } from "rxjs";

export class RxSQL {
  public connection: Connection;
  constructor(connectionParam: Connection) {
    this.connection = connectionParam;
  }

  public query<T>(query: string | QueryOptions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.connection.query(query, (error, result) => {
        if (error) observer.error(error);
        else {
          observer.next(result);
        }
        observer.complete();
      });
    });
  }

  public destroyConnection() {
    this.connection.destroy();
  }
}
