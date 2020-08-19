import {getNotice, getNoticeNum, getTeamNotice} from "@/network/message";

export default {
  state: {
    noticeNum: 0,
    notices: [],
    teamNotices: []
  },
  mutations: {
    setNoticeNum(state, noticeNum) {
      state.noticeNum = noticeNum
    },
    setNotices(state, notices) {
      state.notices = notices
    },
    setTeamNotices(state, teamNotices) {
      state.teamNotices = teamNotices
    }
  },
  actions: {
    updateNoticeNum(context, userId) {
      getNoticeNum(userId).then(res => {
        console.log(res)
        if (res instanceof Number) {
          context.commit('setNoticeNum', res)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    updateNotices(context, userId) {
      getNotice(userId).then(res => {
        console.log(res)
        if (res instanceof Number) {
          context.commit('setNoticeNum', res)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    updateTeamNotices(context, userId) {
      getTeamNotice(userId).then(res => {
        console.log(res)
        if (res instanceof Number) {
          context.commit('setNoticeNum', res)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {

  }
}