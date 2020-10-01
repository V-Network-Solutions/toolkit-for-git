/**
 * * Constants
 * Setting constant literals for access throughout toolkit.
 */

export default {
    arguments: {
        branch: "live",
        devBranch: "dev",
        stageBranch: "stage",
        projectDir: "",
        trackedOnly: false,
        commit: true,
        softError: false,
        fetch: false,
        remote: "devops"
    },
    tests: {
        altName: "github",
        altUrl: "https://dev.azure.com/altUrl",
        name: "origin",
        url: "https://dev.azure.com/url"
    },
    com_path: "common/",
    controller_path: "controller",
    model_path: "model",
    tasks: {
        RemotelyPullGit: {
            name: "Remotely Pull Git",
            path: "remotely-pull-git"
        }
    }
};
