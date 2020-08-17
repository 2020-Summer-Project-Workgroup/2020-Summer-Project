import {updateUsernameByEmail, updateUsernameByTel} from "@/network/desktop";

export default {
  updateUsername(context, username) {
    if (!(context.getters.tel === '')) {
      return updateUsernameByTel(context.getters.tel, username)
    } else {
      return updateUsernameByEmail(context.getters.email, username)
    }
  }
}