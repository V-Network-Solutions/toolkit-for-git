import { RemotelyPullGit } from "../tasks/remotely-pull-git/RemotelyPullGit";

export class Listener {
    private RemotelyPullGit: object;

    public constructor() {
        this.RemotelyPullGit = new RemotelyPullGit();
        console.log(this.RemotelyPullGit);
    }

    public async get_RemotelyPullGet() {
        return this.RemotelyPullGit;
    }
}
