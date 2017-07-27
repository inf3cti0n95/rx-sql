import { IConnection } from "mysql";
import { Observable } from "rxjs";
export declare class RxSQL {
    connection: IConnection;
    constructor(connectionParam: IConnection);
    query<T>(query: string): Observable<T>;
    destroyConnection(): void;
}
