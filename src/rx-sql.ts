import { createConnection, IConnection, IQuery, IConnectionConfig } from "mysql";
import { Observable, Observer } from "rxjs";

export class RxSQL {
    public connection: IConnection;
    constructor(connectionParam: IConnection) {
        this.connection =  connectionParam;      
    }

    public query<T>(query: string): Observable<T>{
        return Observable.create((observer: Observer<T>) => {
                this.connection.query(query,(error, result, fields) => {
                        if(error)
                            observer.error(error)
                        else
                            observer.next(result)
                        observer.complete();
                })
        })
    }

    public destroyConnection(){
        this.connection.destroy();
    }
}