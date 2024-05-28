import VueRouter from 'vue-router'
import Form from "../views/Form.vue";
import HomeIndex from "../views/HomeIndex.vue";
import NotFound from "../views/NotFound.vue";
import OtherView from "../views/OtherView.vue";

export default new VueRouter({
    routes: [
        {
            path: '/HomeIndex',
            name: "HomeIndex",
            component: HomeIndex,
            meta: {
                title: "首页"
            }

        },
        {
            path: '/Form',
            name: "Form",
            component: Form,
            meta: {
                title: "表单"
            }
        },
        {
            path: '/OtherView',
            name: "OtherView",
            component: OtherView,
            meta: {
                title: "其他页面"
            }
        },
        {
            path: "*",
            component: NotFound
        },
        {
            path: "/",
            redirect: {
                name: "HomeIndex"
            }
        }
    ]
})