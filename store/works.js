export const state=()=>({
  workLists: [
    {
            "id": 1,
            "title": "SHO AND Portfolio Site",
            "kinds": "personal",
            "images":["/img/works/portfolio/portfolio1.png","/img/works/portfolio/portfolio2.png",],
                  "detail": "現在閲覧いただいておりますサイトになります。こちらにこれまで作成した作品、および現在携わっております業務を掲載していきます。",
            "accounts": [],
            "URL": "https://portfolio-syand.netlify.app",
            "technologies":["Nuxt.js","Netlify",],
            "github_1": "https://github.com/sy-andou/Rese_Netlify"
    },
    {
            "id": 2,
            "title": "RSS",
            "kinds": "personal",
            "images":["/img/works/RSS/RSS1.png","/img/works/RSS/RSS2.png","/img/works/RSS/RSS3.png","/img/works/RSS/RSS4.png","/img/works/RSS/RSS5.png"],
            "detail": "レストランの予約管理アプリケーションになります。検索・お気に入り登録・予約・レビュー投稿を行うことができます。また一般利用者以外の店舗代表者や管理者用の管理機能も作成しました。とくにこだわった点は、同一店舗かつ同一日時の既予約から残り予約可能人数を自動計算し、それ以上の人数は予約ができないようにしております。",
            "accounts": ["【管理者】email:sample@administrators.com, password:password","【店舗代表者】email:sample@representatives.com, password:password","【一般ユーザ】email:userA@users.com, password:password"],
            "URL": "https://rss-syand.netlify.app",
            "technologies":["Nuxt.js","Laravel","Netlify","Heroku","AWS(s3)",],
            "github_1": "https://github.com/sy-andou/Rese_Netlify",
            "github_2": "https://github.com/sy-andou/Rese_backend_Heroku",
    },
    {
            "id": 3,
            "title": "Crops",
            "kinds": "personal",
            "images":["/img/works/crops/crops1.png","/img/works/crops/crops2.png","/img/works/crops/crops3.png"],
            "detail": "農作物の販売サイトになります。実家が農業を営んでいることから、農作物を直売できるようにECサイトを構築しました(現在、サイト製作中です。)。",
            "accounts": [],
            "URL": "https://crops-syand.netlify.app",
            "technologies":["Nuxt.js","Laravel","Netlify","Heroku","AWS(s3)","docker"],
            "github_1": "https://github.com/sy-andou/cropsfrontend",
            "github_2": "https://git.heroku.com/cropsbackend.git"
    },
    {
            "id": 4,
            "title": "金属化合物の強度計算に関するデスクトップアプリケーション",
            "kinds": "work",
            "images":["/img/works/electron-vue_sampleApp.jpeg",],
            "detail": "金属化合物の強度計算を実施するアプリケーションになります。フロントエンドをElectron-vue、バックエンドをFirebaseで作成しております(現在、アプリケーション作成中になります。近日公開予定です)。",
            "accounts": [],
            "URL": "現在、開発中です。",
            "technologies":["Electron-vue","Firebase"],
            "github_1": "現在、開発中です。",
    },
  ],
  workList:{},
})
export const mutations = {
}
export const actions = {
}
export const getters = {
}