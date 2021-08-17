export default function (app){
    return function install(){
        let allComponent = require.context('.',true,/\.vue/);
        allComponent.keys().forEach((item) => {
            // 注册全局组件
            app.component(allComponent(item).default.name,allComponent(item).default)
        })
    }  
}