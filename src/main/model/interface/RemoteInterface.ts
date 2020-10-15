/** Interface RemoteInterface
 * This is for the often repeated devops remote and branch.
 */

export default interface RemoteInterface {
  branch: string
  discriminator: "I-AM-RemoteInterface"
  force?: boolean
  projectDir?: string
  remote: string
}
