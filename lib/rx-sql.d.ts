import { IConnection } from "mysql";
import { Observable } from "rxjs";
export declare class RxSQL {
    connection: IConnection;
    constructor(connectionParam: IConnection);
    query(query: string): Observable<Array<any>>;
    destroyConnection(): void;
}
