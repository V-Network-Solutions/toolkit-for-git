/** Class TaskInputOptions represent the field input options. */
// !import RemoteInterface from "../model/interface/RemoteInterface"
// * This is under construction * \\
import InputFieldOptions from "./interface/InputFieldOptionsInterface"
export default class ToolkitInputOptions {
    /**
     * Stores Field Input Options.
     * This property is private and contains most of the default values required from the input options.
     * This class contains getters and setters for accessing this property.
     *
     * @param _inputFieldOptions - This is the array of input options asked between all of the tasks.
     *
     */
    private _inputFieldOptions: InputFieldOptions

    /**
     * Create a set of input field options.
     *
     * @remarks
     * This was going to be a static class, but I think this should work out better.
     *
     */
    public constructor() {
        this._inputFieldOptions = {}
    }
    /**
     * Get an input field value.
     *
     * @return {mixed} The input field option value.
     */
    public get inputFieldOptions(): any {
        return this._inputFieldOptions
    }

    /**
     * Sets or updates _inputFieldOptions object values or creates additional ones.
     *
     * @param {any} value - The object to add or modify.
     */
    public set inputFieldOptions(value: any) {
        this._inputFieldOptions = value
    }

    /**
     * Sets or updates property for for _inputFieldOptions object value.
     *
     * @param {string} prop - The name of the property to be accessed or created within the input field options object
     * @param {any} value - Add or modify with this value.

    public set remote(prop: string, value: any) {
        this._inputFieldOptions.prop = _remote
    }
    */
}
