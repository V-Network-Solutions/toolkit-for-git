import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { RemotelyPullGit } from "./remotelyPullGit";

chai.use(chaiAsPromised);
const expect = chai.expect;

let task: RemotelyPullGit;

describe("remotelyPullGit", async () => {
    task = new RemotelyPullGit();
    let emptyString = task.empty_string("", false);

    describe("run", () => {

        it("should verify that mocha is working and the return is a promise", () => {
            expect(emptyString).to.be.a("promise");
            console.log("mocha & chai working");
        });

        it("Should verify the empty string is still empty", () => {
            expect(emptyString).to.be.a("promise");
            emptyString.then(function (value) {
                expect(value).to.be.true;
            });
        });

        it("should verify the empty string is no longer empty", () => {
            emptyString = task.empty_string("none empty string text", false);
            expect(emptyString).to.be.a("promise");
            emptyString.then(function (value) {
                expect(value).to.be.false;
            });
        });

        it("should throw a non-string type error", () => {
            emptyString = task.empty_string("", true);
            emptyString.then(function (value) {
                expect(value).to.be.an("error");
            });
        });
    });

});
