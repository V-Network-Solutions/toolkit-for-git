/**
 * * Listener
 * Testing that the listener can initiate requests.
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Listener } from "../../main/controller/Listener";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Listener", async () => {
    const Lister = new Listener();
    it("can be created", async () => {
        chai.should().exist(Lister);
    });

    describe("get_RemotelyPullGet", () => {

        it("should verify that the return is a promise", () => {
            expect(Lister.get_RemotelyPullGet()).to.be.a("promise");
        });
    });
});
