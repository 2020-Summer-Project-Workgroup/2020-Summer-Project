import {getNotice, getNoticeNum, getTeamNotice, updateTeamNoticeStatus} from "@/network/message";

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
    },
    updateTeamNoticeStatus(state, payload) {
      for(let notice of state.notices) {
        if (payload.noticeId === notice.id) {
          notice.type = payload.status
        }
      }
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
    },
    updateTeamNoticeStatus(context, payload) {
      updateTeamNoticeStatus(payload.noticeId, payload.type).then(res => {
        if (res === 'Yes') {
          context.commit({
            type: 'updateTeamNoticeStatus',
            noticeId: payload.noticeId,
            status: payload.type
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    noticeNum(state) {
      return state.noticeNum
    },
    notices(state) {
      return state.notices
    },
    teamNotices(state) {
      return state.teamNotices
    }
  }
}