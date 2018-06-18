import { Connection, QueryOptions } from "mysql";
import { Observable } from "rxjs";
export declare class RxSQL {
    connection: Connection;
    constructor(connectionParam: Connection);
    query<T>(query: string | QueryOptions): Observable<T>;
    destroyConnection(): void;
}
