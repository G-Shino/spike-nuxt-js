<template>
  <div class="wrapper">
    <h1>Task List!</h1>
    <form class="add-form" v-on:submit.prevent="addTask($event)">
      <input type="text" v-model="content" placeholder="edit me">
      <button type="submit">追加</button>
    </form>
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
          <td>
            {{ todo.content }}
          </td>
          <td class="task-state">
            <button v-on:click="changeState(todo.id)">{{ todo.state?"OK":"NO" }}</button>
          </td>
          <td class="task-del">
            <button v-on:click="removeTask(todo.id)">削除</button>
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
        id: 0,
        content: "hoge",
        state: false
      }],
      content: ""
    }
  },
  methods: {
    addTask: function(event){
      if (!this.content.length){
        return
      }
      const lastTodo = this.todos.slice(-1)[0] || {id: -1}
      this.todos.push({
        id: lastTodo.id + 1,
        content: this.content,
        state: false
      })
      this.content = "";
    },
    removeTask: function(id){
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    changeContent: function(id){
      console.log(id);
    },
    changeState: function(id){
      this.todos = this.todos.map((todo) => {
        let newTodo = {}
        if (todo.id === id){
          newTodo = {...todo, state: !todo.state}
        }else{
          newTodo = todo
        }
        return newTodo
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";
  .wrapper {
    width: 90%;
    margin: 32px auto 0;
    h1{
      margin-bottom: 16px;
    }
  }
  .task-list-area{
    width: 100%;
    table-layout: fixed;
    thead{
      border-bottom: 2px solid black;
    }
    tbody{
      tr{
        line-height: 1.5;
        border-bottom: 1px solid lighten(black, 50%);
        td{
          padding-right: 16px;
          overflow-wrap: break-word;
        }
      }
    }
  }
  .add-form{
    width: 100%;
    max-width: 540px;
    padding: 16px;
    margin-bottom: 32px;
    background-color: lighten($accent-color1, 35%);
    border-radius: 8px;
    input{
      width: calc(100% - 4rem - 16px);
      padding: 0 1rem;
      line-height: 2;
      border: 1px solid black;
      border-radius: 4px;
    }
    button{
      margin-left: 16px;
    }
  }
  button{
    &:hover{
      color: $accent-color1;
    }
  }
</style>

