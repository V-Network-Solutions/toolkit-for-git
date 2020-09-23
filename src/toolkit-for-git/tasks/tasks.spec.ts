import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { ToolkitForGitTasks } from "./tasks";

chai.use(chaiAsPromised);
const expect = chai.expect;

let task: ToolkitForGitTasks;

describe("ToolkitForGitTasks", async () => {
    task = new ToolkitForGitTasks();
    const RemotelyPullGit = task.remotely_pull_git();

    describe("remotely_pull_git", () => {

        it("should verify that mocha is working and the return is a promise", () => {
            expect(RemotelyPullGit).to.be.a("promise");
        });
    });

});
