/**
 * * TaskInputOptions Unit-Tests
 * Testing input options collected during task configuration model class.
 */

import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import ToolkitInputOptions from "../../main/model/TaskInputOptions"

chai.use(chaiAsPromised)
const expect = chai.expect
const inputOptions = new ToolkitInputOptions()

describe("Input Options", async () => {
    it("can be created", async () => {
        const inputs = ToolkitInputOptions
        chai.should().exist(inputs)
    })
/*
 ?
    describe("RemotelyPullGit User Inputs", () => {
        describe("", () => {

        });
    });
*/
})
