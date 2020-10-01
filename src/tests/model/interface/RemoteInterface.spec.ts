/**
 * * RemoteInterface Unit-Tests
 * Testing the RemoteInterface interface model.
 */

import chai from "chai";
import { RemoteInterface } from "../../../main/model/interface/RemoteInterface";

const expect = chai.expect;

describe("RemoteInterface Model", async () => {
    const testInterfaceA: any = {
        discriminator: "I-AM-RemoteInterface",
        branch: "interfaceA",
        force: true,
        remote: "https://dev.azure.com/vnetkc",
    };
    const testInterfaceB: any = {
        discriminator: "I-AM-RemoteInterface",
        branch: "interfaceB",
        remote: "https://dev.azure.com/vnetkc",
    };

    function return_option(
        object: any,
        testForce = false
    ): object is RemoteInterface {
        if (testForce) {
            return object.force;
        }
        return object.discriminator === "I-AM-RemoteInterface";
    }

    describe("Test Interface A -- force: true", async () => {
        it("discriminator matches interface object", async () => {
            expect(return_option(testInterfaceA)).to.be.true;
        });

        it("force literal is set and true", async () => {
            expect(return_option(testInterfaceA, true)).to.be.true;
        });
    });

    describe("Test Interface B -- force: undefined", async () => {
        it("discriminator matches interface object", async () => {
            expect(return_option(testInterfaceB)).to.be.true;
        });

        it("force literal is undefined", async () => {
            expect(return_option(testInterfaceB, true)).to.be.undefined;
        });
    });
});
