/*
 * * RemotelyPullGit.spec
 */

import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { RemotelyPullGit } from "../../../main/tasks/remotely-pull-git/RemotelyPullGit"

chai.use(chaiAsPromised)
const expect = chai.expect

let task: RemotelyPullGit

describe("remotelyPullGit", async () => {
    task = new RemotelyPullGit()
    let emptyString = task.empty_string("", false)

    describe("Getter & Setter Test", () => {
        describe("throwError", () => {
            it("should check if error is error is set and false", () => {
                const throwError = task.throwError
                expect(throwError).to.be.false
            })
            it("should set throw error to be true and return true", () => {
                task.throwError = true
                expect(task.throwError).to.be.true
            })
        })
        describe("blankString", () => {
            it("should return an empty string", () => {
                const blankString = task.blankString
                expect(blankString).to.equal("")
            })
        })
    })

    describe("run", () => {
        it("should verify that mocha is working and the return is a promise", () => {
            expect(emptyString).to.be.a("promise")
            console.log("mocha & chai working")
        })

        it("Should verify the empty string is still empty", () => {
            expect(emptyString).to.be.a("promise")
            emptyString.then(function (value) {
                expect(value).to.be.true
            })
        })

        it("should verify the empty string is no longer empty", () => {
            emptyString = task.empty_string("none empty string text", false)
            expect(emptyString).to.be.a("promise")
            emptyString.then(function (value) {
                expect(value).to.be.false
            })
        })

        it("should throw a non-string type error", () => {
            emptyString = task.empty_string("", true)
            emptyString.then(function (value) {
                expect(value).to.be.an("error")
            })
        })
    })
})
