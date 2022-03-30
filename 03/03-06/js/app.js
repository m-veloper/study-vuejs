// 전역 컴포넌트
Vue.component('todo-footer', {
  template: '<p>This is another global child component</p>'
})

// 지역 컴포넌트
const todoList = {
  template: '<p>This is another local child component</p>'
}
new Vue({
  el: '#app',
  data: {
    message: "컴포넌트 진행중"
  },
  components: {
    'todo-list': todoList
  }
});