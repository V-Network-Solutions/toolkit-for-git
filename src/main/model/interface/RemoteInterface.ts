/**
 * * RemoteInterface.ts
 * This is for the often repeated devops remote and branch.
 */

export interface RemoteInterface {
  branch: string;
  discriminator: "I-AM-RemoteInterface";
  force?: boolean;
  remote: string;
}
