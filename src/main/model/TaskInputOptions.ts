/**
 * * TaskInputOptions
 *
 * @remarks
 * Model of input options collected during task configuration.
 *
 * @import
 * RemoteInterface.ts - This will build the interface for any remote connections
 */
import { RemoteInterface } from "../model/interface/RemoteInterface"
export class ToolkitInputOptions {
    public get inputFieldOptions(): object {
        return this._inputFieldOptions
    }
    public set inputFieldOptions(value: object) {
        this._inputFieldOptions = value
    }
    public get remote(): RemoteInterface {
        return this._remote
    }
    public set remote(value: RemoteInterface) {
        this._remote = value
    }
    /**
     * Stores Field Input Options.
     *
     * @remarks
     * This property is private and contains most of the default values required from the input options.
     * This class contains getters and setters for accessing this property.
     *
     * @param inputFieldOptions - This is the array of input options asked between all of the tasks.
     *
     */
    private _inputFieldOptions: object
    /**
     * Stores Remote Input Options.
     *
     * @remarks
     * This stores information based on the RemoteInterface interface layout.
     *
     * @param _remote - This is special object interface of inputs used in remote connection.
     *
     */
    private _remote: RemoteInterface
    /**
     * Constructs whatever is attempting to use input options.
     *
     * @remarks
     * This was going to be a static class, but I think this should work out better.
     *
     * @param r - This is special object interface of inputs used in remote connection.
     *
     */
    public constructor(r: RemoteInterface) {
        this._remote = r
        this._inputFieldOptions = {
            remote: this._remote,
            branch: "live",
            stageBranch: "stage",
            devBranch: "dev",
            projectDir: "wordpress",
            commit: true,
            softError: false,
            fetch: false,
            trackedOnly: false,
        }
    }
}
