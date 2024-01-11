import { defineStore } from 'pinia'

const useCommonStore = defineStore('common', {
  state: () => ({
    isLoading: false,
    loadingMsg: '',
  }),
  actions: {
    async loading(code, msg='') {
      try {
        this.isLoading = true
        this.loadingMsg = msg
        return await code()
      } finally {
        this.isLoading = false
      }
    },
  }
})

export default useCommonStore
