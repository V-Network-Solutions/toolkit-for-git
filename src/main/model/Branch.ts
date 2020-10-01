/**
 * * Branch
 * Class for modeling branch commands for tasks.
 */

export class Branch {
  private _name: string;

  public constructor($name: string) {
    this._name = $name;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
}
