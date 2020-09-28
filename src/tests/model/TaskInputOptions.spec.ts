/**
 * * TaskInputOptions Unit-Tests
 * Testing model of input options collected during task configuration.
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { ToolkitInputOptions } from "../../main/model/TaskInputOptions";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Input Options", async () => {
    it("can be created", async () => {
        const literals = ToolkitInputOptions.inputFieldDefaults;
        chai.should().exist(literals);
    });
});
