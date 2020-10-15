/** Interface InputFieldOptionsInterface
 * Forms an input field property object
 */
import RemoteInterface from "./RemoteInterface"

export default interface InputFieldOptionsInterface {
    branch?: "live"
    commit?: true
    devBranch?: "dev"
    discriminator?: "I-AM-InputFieldOptionsInterface"
    fetch?: false
    force?: false
    remote?: RemoteInterface
    softError?: false
    stageBranch?: "stage"
    trackedOnly?: false
  }
