var app = new Vue ({
    el:'#app',
    // data プロパティに定義された変数でなければVueアプリ内で扱えない。
    data:{
        currentTab:1
    },
    methods:{
        toggle: function(tab){
            // this が指し示すものは、Vueインスタンス。設定オブジェクトそのものではありません
            // 設定オブジェクト内では this を通してアクセスすることができる。
            this.currentTab =tab
        }
    }
})
