/**
 * * Remote Unit-Tests
 * Testing the Remote class model.
 */

import chai from "chai";
import { Remote } from "../../main/model/Remote";
import constants from "../../main/common/constants";

const expect = chai.expect;
const should = chai.should;
const tests = constants.tests;

/*
 * * create object with a name argument
 */

describe("New Remote With Name", async () => {
    const remote = new Remote(tests.url, tests.name);

    it("can be created", async () => {
        should().exist(remote);
    });

    describe("Get remote object property values", async () => {
        const url = tests.url;
        const name = tests.name;
        it("should return a url value of " + url, async () => {
            expect(remote.url).to.equal(url);
        });

        it("should return a name value of " + name, async () => {
            expect(remote.name).to.equal(name);
        });
    });

    describe("Set remote object property values", async () => {
        const url = tests.altUrl;
        const name = tests.altName;

        it("current url value of object should not equal new url value of " + url, async () => {
            const current = remote.url;
            expect(url !== current).to.equal(true);
        });

        it("current url value of object should equal new url value of " + url, async () => {
            remote.url = url;
            const current = remote.url;
            expect(url === current).to.equal(true);
        });

        it("current name value of object should not equal new name value of " + name, async () => {
            const current = remote.name;
            expect(name !== current).to.equal(true);
        });

        it("current name value of object should equal new name value of " + name, async () => {
            remote.name = name;
            const current = remote.name;
            expect(name === current).to.equal(true);
        });
    });
});

/*
 * * create object without a name argument
 */

describe("New Remote Without a Name", async () => {
    const remote = new Remote(tests.url);

    it("can be created", async () => {
        should().exist(remote);
    });

    describe("Get remote object property values", async () => {
        const url = tests.url;
        const name = constants.arguments.remote;
        it("should return a url value of " + url, async () => {
            expect(remote.url).to.equal(url);
        });

        it("should return a name value of " + name, async () => {
            expect(remote.name).to.equal(name);
        });
    });

    describe("Set remote object property values", async () => {
        const url = tests.altUrl;
        const name = tests.name;

        it("current url value of object should not equal new url value of " + url, async () => {
            const current = remote.url;

            expect(url !== current).to.equal(true);
        });

        it("current url value of object should equal new url value of " + url, async () => {
            remote.url = url;
            const current = remote.url;

            expect(url === current).to.equal(true);
        });

        it("current name value of object should not equal new name value of " + name, async () => {
            const current = remote.name;

            expect(name !== current).to.equal(true);
        });

        it("current name value of object should equal new name value of " + name, async () => {
            remote.name = name;
            const current = remote.name;

            expect(name === current).to.equal(true);
        });
    });
});
