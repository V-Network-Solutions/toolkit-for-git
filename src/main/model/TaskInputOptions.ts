/** Class TaskInputOptions represent the field input options. */
import { RemoteInterface } from "../model/interface/RemoteInterface"
export class ToolkitInputOptions {
    /**
     * Stores Field Input Options.
     *
     * @remarks
     * This property is private and contains most of the default values required from the input options.
     * This class contains getters and setters for accessing this property.
     *
     * @param _inputFieldOptions - This is the array of input options asked between all of the tasks.
     *
     */
    private _inputFieldOptions: object

    /**
     * Create a set of input field options.
     *
     * @remarks
     * This was going to be a static class, but I think this should work out better.
     *
     * @param {RemoteInterface} _remote - The remote connection options.
     */
    public constructor(_remote: RemoteInterface) {
        this._inputFieldOptions = {
            remote: _remote,
            branch: "live",
            stageBranch: "stage",
            devBranch: "dev",
            commit: true,
            softError: false,
            fetch: false,
            trackedOnly: false,
        }
    }
    /**
     * Get an input field value.
     *
     * @return {mixed} The input field option value.
     */
    public get inputFieldOptions(): object {
        return this._inputFieldOptions
    }

    /**
     * Sets or updates _inputFieldOptions object values or creates additional ones.
     *
     * @param {object} value - The object to add or modify.
     */
    public set inputFieldOptions(value: object) {
        this._inputFieldOptions = value
    }

}
