import { RemotelyPullGit } from "./remotely-pull-git/remotelyPullGit";

const remotelyPullGit = new RemotelyPullGit();


export class ToolkitForGitTasks {

    // tslint:disable-next-line: no-empty
    public constructor() {
    }

    public async remotely_pull_git() {
        return remotelyPullGit.run();
    }
}
