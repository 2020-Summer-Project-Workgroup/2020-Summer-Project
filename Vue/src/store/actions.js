import {
  retrieveUserByEmail,
  retrieveUserByTel,
  updatePassword, updateUserInfo,
} from "@/network/desktop";

export default {
  updateUsername(context, username) {
    return updateUserInfo(context.getters.userId, username, 0)
  },
  updatePassword(context, password) {
    return updatePassword(context.getters.userId, context.getters.password, password)
  },
  updateTel(context, tel) {
    return updateUserInfo(context.getters.userId, tel, 2)
  },
  updateEmail(context, email) {
    return updateUserInfo(context.getters.userId, email, 1)
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
        console.log(context.getters.userId)
        context.dispatch('updateNoticeNum', context.getters.userId)
        context.dispatch('updateNotices', context.getters.userId)
        context.dispatch('updateTeamNotices', context.getters.userId)
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