import {
  updatePasswordByEmail,
  updatePasswordByTel, updateTelByEmail,
  updateUsernameByEmail,
  updateUsernameByTel
} from "@/network/desktop";

export default {
  updateUsername(context, username) {
    if (!(context.getters.tel === '')) {
      return updateUsernameByTel(context.getters.tel, username)
    } else {
      return updateUsernameByEmail(context.getters.email, username)
    }
  },
  updatePassword(context, password) {
    if (!(context.getters.tel === '')) {
      return updatePasswordByTel(context.getters.tel, password)
    } else {
      return updatePasswordByEmail(context.getters.email, password)
    }
  },
  updateTel(context, tel) {
    return updateTelByEmail(context.getters.email, tel)
  }
}