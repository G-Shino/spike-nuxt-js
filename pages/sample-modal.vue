<template>
  <div class="wrapper">
    <h1>Modal Window!</h1>
    <p>ボタンを押すとモーダルウィンドウが開きます</p>
    <button v-on:click="openModal">Open</button>
    <Modal v-on:close="closeModal" v-if="flagModal" class="modal">
      <p>Modal Window!</p>
      <div>
        <input v-model="message" placeholder="input here">
      </div>
      <template v-slot:footer>
        <button v-on:click="doSend" v-bind:disabled="message.length === 0">Send</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "../components/sample-modal/Modal"
export default {
  components: { Modal },
  data: function(){
    return {
      flagModal: false,
      message: ""
    }
  },
  methods: {
    openModal(){
      this.flagModal = true
    },
    closeModal(){
      this.flagModal = false
    },
    doSend(){
      if (this.message.length > 0){
        alert(this.message)
        this.message = ""
        this.closeModal()
      } else {
        alert("メッセージを入力してください")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";
  .wrapper {
    width: 90%;
    margin: 32px auto 0;
  }
  .modal{
    p{
      margin-bottom: 8px
    }
    input{
      width: 100%;
      padding: 0 1rem;
      line-height: 2;
      border: 1px solid black;
      border-radius: 4px;
    }
  }
  button{
    cursor: pointer;
    &:hover{
      color: $accent-color1;
    }
    &:disabled{
      opacity: 0.1;
    }
  }
</style>

