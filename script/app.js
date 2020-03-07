const bobobo = new Vue({
    el: '#bobobo',
    data: {
        message: '',
        result: 'ボボボ'
    },
    methods: {
        bobobo: function(event){
            this.result = insertBoRandomTimes(this.message)
        }
    }
  })