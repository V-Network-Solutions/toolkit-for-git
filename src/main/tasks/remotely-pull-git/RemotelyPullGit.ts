import tl = require("azure-pipelines-task-lib/task")
import taskLib = require("azure-pipelines-task-lib")
import constants from "../../common/constants"

export class RemotelyPullGit {
    private _blankString: string
    private _throwError: boolean

    public constructor() {
        this._blankString = ""
        this._throwError = false
    }

    public async empty_string(str: string, tossErr: boolean) {
        try {
            if (tossErr) {
                throw new Error("This is a test of the emergency broadcast system")
            }

            // const inputString: string | undefined = tl.getInput("samplestring", true)
            if (this.blankString === str) {
                return true
            }
            // console.log("Hello", inputString);
            return false
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message)
            return new Error()
        }
    }

    public get throwError(): boolean {
        return this._throwError
    }
    public set throwError(value: boolean) {
        this._throwError = value
    }

    public get blankString(): string {
        return this._blankString
    }
}
