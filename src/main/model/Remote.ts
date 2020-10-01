/**
 * * Remote.ts
 * This is the remote class for managing remote connections.
 */

export class Remote {
    private _name: string;
    private _url: string;

    public constructor(url: string, name?: string) {
        this._url = url;
        if (name === undefined) {
            this._name = "devops";
            return;
        }
        this._name = name;
     }

     /**
      * Getter name
      * @return {string}
      */
     public get name(): string {
         return this._name;
     }

     /**
      * Getter url
      * @return {string}
      */
     public get url(): string {
         return this._url;
     }

     /**
      * Setter name
      * @param {string} value
      */
     public set name(value: string) {
         this._name = value;
     }

     /**
      * Setter url
      * @param {string} value
      */
     public set url(value: string) {
         this._url = value;
     }
 }
