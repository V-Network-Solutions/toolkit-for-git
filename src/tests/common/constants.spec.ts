/**
 * * Testing constant literals are able to be created.
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as tk4git from "../../main/common/constants";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Constants", async () => {
    it("can be created", async () => {
        const obj = tk4git.default;
        chai.should().exist(obj);
    });
});
