const bobobo = new Vue({
    el: '#bobobo',
    vuetify: new Vuetify(),
    data: {
        message: 'ボンバーマン',
        result: insertBoRandomTimes('ボンバーマン')
    },
    methods: {
        bobobo: function (event) {
            this.result = insertBoRandomTimes(this.message)
        },
        copyResult: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.result);
            }
        }
    }
})