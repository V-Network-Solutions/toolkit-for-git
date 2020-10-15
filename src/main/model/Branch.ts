/** Class Branch represent git commands for branches
 * Is a model for branch commands used for tasks.
 */
export class Branch {
    /**
     * Store the name of the branch.
     *
     * @param {string}_name - This is the name of the branch object.
     *
     */
    private _name: string

    public constructor($name: string) {
        this._name = $name
    }

    /**
     * Get branch name
     * @return {string} - Returns name of branch
     */
    public get name(): string {
        return this._name
    }

    /**
     * Set branch name
     * @param {string} value - Sets the name of the branch
     */
    public set name(value: string) {
        this._name = value
    }
}
