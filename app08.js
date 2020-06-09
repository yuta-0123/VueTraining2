var app = new Vue({
    el: '#app',
    data: {
      left: 0,
      right: 0,
      isComputedCalled: false
    },
    methods: {
      // この関数が呼び出されたタイミングがわかるようにメッセージを表示させる
      setMessage: function () {      
        this.isComputedCalled = true
        const that = this

        setTimeout(function () {
          that.isComputedCalled = false
        }, 1000) // 1秒後にメッセージが消えます
      }
    },

    computed: {
      total: function () {
        this.setMessage()
        return this.left + this.right
      }
    }
  })
  