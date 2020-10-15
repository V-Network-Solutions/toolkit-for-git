/**
 * * Branch Unit-Tests
 * Testing the Branch class model.
 */

import chai from "chai"
import constants from "../../main/common/constants"
import { Branch } from "../../main/model/Branch"

const expect = chai.expect
const constant = constants.arguments

describe("Branch Model", async () => {
    const stage = constant.stageBranch
    const branch = new Branch(stage)
    const devBranch = constant.devBranch

    it("can be created", async () => {
        chai.should().exist(branch)
    })

    describe("Getters & Setters", async () => {
        it("gets the original name of stage used creation the class", async () => {
            expect(branch.name).to.equal(stage)
        })

        it("sets the branch name -- this time dev", async () => {
            branch.name = devBranch
            expect(branch.name).to.equal(devBranch)
        })
    })
})
