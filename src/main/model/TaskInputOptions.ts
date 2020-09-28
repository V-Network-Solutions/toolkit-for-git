/**
 * * TaskInputOptions
 * Model of input options collected during task configuration.
 */

export class ToolkitInputOptions {

    public static inputFieldDefaults = {
        branch: "live",
        stageBranch: "stage",
        devBranch: "dev",
        projectDir: "wordpress",
        commit: true,
        softError: false,
        fetch: false,
        trackedOnly: false
    };
}
