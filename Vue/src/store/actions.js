import {
  retrieveUserByEmail,
  retrieveUserByTel,
  updateEmailByTel,
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
  },
  updateEmail(context, email) {
    return updateEmailByTel(context.getters.tel, email)
  },
  initState(context) {
    if (!(context.getters.tel === '')) {
      retrieveUserByTel(context.getters.tel).then(res => {
        context.commit('setUserId', res.id)
        context.commit('updateUsername', res.name)
        context.commit('updatePassword', res.password)
        context.commit('updateTel', res.tel)
        context.commit('updateEmail', res.email)
        context.commit('setFiles', res.files)
        context.commit('setFavorites', res.favorites)
        context.dispatch('updateNoticeNum')
        context.dispatch('updateNotices')
        context.dispatch('updateTeamNotices')
      }).catch(err => {
        console.log(err)
      })
    } else {
      retrieveUserByEmail(context.getters.email).then(res => {
        context.commit('setUserId', res.id)
        context.commit('updateUsername', res.name)
        context.commit('updatePassword', res.password)
        context.commit('updateTel', res.tel)
        context.commit('updateEmail', res.email)
        context.commit('setFiles', res.files)
        context.commit('setFavorites', res.favorites)
        context.dispatch('updateNoticeNum')
        context.dispatch('updateNotices')
        context.dispatch('updateTeamNotices')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}