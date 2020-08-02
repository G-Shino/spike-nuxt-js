<template>
  <div class="wrapper">
    <h1>Task List!</h1>
    <table class="task-list-area">
      <thead>
        <tr>
          <th class="task-id">ID</th>
          <th class="task-content">タスク内容</th>
          <th class="task-state">状態</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo.id">
          <th>{{ todo.id }}</th>
          <td>{{ todo.content }}</td>
          <td class="task-state">
            <button>{{ todo.state }}</button>
          </td>
          <td class="task-del">
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todos: [{
        id: 1,
        content: "hoge",
        state: "OK"
      }]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";
  .wrapper {
    width: 90%;
    margin: 16px auto 0;
    h1{
      margin-bottom: 16px;
    }
  }
  .task-list-area{
    width: 100%;
    thead{
      border-bottom: 2px solid black;
      tr{
        th{
          padding-right: 32px;
        }
      }
    }
  }
</style>

