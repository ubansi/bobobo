const bobobo = new Vue({
    el: '#bobobo',
    vuetify: new Vuetify(),
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