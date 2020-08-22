import {
  loginMessage,
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
    const notices = [
      {
        id: '238yer19fiqrf81',
        type: 1,
        sendName: '不知名灰烬',
        content: '不知名灰烬',
        time: '5月22日 18:43'
      },
      {
        id: '238y8932yr9heiudqw',
        type: 2,
        sendName: '猫奴',
        content: '养猫学会',
        time: '5月22日 18:43'
      },
      {
        id: 'ihdq983ehoef81',
        type: 3,
        sendName: '猫奴',
        content: '养狗学会',
        time: '5月22日 18:43'
      },
      {
        id: 'q3he0wdhdwdoq',
        type: 4,
        sendName: '猫奴',
        content: '养猫学会',
        time: '5月22日 18:43'
      },
    ]
    const comment = [
      {
        id: 'duqfggdgqwgdqgd892ey1929e',
        sendName: '猫奴',
        title: '分享一只可爱的橘猫',
        content: '有空一块去撸猫',
        time: '5月22日 18:44'
      },
      {
        id: 'duqfggdgqwgdqgd892ey1929e',
        sendName: '猫奴',
        title: '分享一只可爱的橘猫',
        content: '我也喜欢小橘猫！~',
        time: '5月22日 18:43'
      }
    ]
    if (!(context.getters.tel === '')) {
      retrieveUserByTel(context.getters.tel).then(res => {
        context.commit('setUserId', res.id)
        context.commit('updateUsername', res.name)
        context.commit('updatePassword', res.password)
        context.commit('updateTel', res.tel)
        context.commit('updateEmail', res.email)
        context.dispatch('setUserFiles')
        context.dispatch('setRecycleBin')
        context.dispatch('setGroups')
        context.commit('setNoticeNum', 6)
        context.commit('setNotices', comment)
        context.commit('setTeamNotices', notices)
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
        context.dispatch('setUserFiles')
        context.dispatch('setRecycleBin')
        context.dispatch('setGroups')
        context.commit('setNoticeNum', 6)
        context.commit('setNotices', comment)
        context.commit('setTeamNotices', notices)
      }).catch(err => {
        console.log(err)
      })
    }
    loginMessage(context.getters.username).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}