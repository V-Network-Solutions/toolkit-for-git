import tl = require("azure-pipelines-task-lib/task");
import taskLib = require("azure-pipelines-task-lib");

export class RemotelyPullGit {
    public blankString: string;
    public throwError: boolean;
    public constructor() {
        this.blankString = "";
        this.throwError = false;
    }

    public async empty_string(str: string, tossErr: boolean) {
        try {
            if (tossErr) {
                throw new Error("This is a test of the emergency broadcast system");
            }

            // const inputString: string | undefined = tl.getInput("samplestring", true);
            if (this.blankString === str) {
                return true;
            }
            // console.log("Hello", inputString);
            return false;
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
            return new Error();
        }
    }

    // tslint:disable-next-line: no-empty
    public async run() {
    }

}


const remotelyPullGit = new RemotelyPullGit();
remotelyPullGit.run();
