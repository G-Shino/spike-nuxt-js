<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" v-on:click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <slot />
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button v-on:click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<style lang="scss" scoped>
@import "../../assets/sass/variables.scss";
.modal{
  &.modal-overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    padding-bottom: 16px;
    max-width: 480px;
    background: $main-color;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content{
    width: 100%;
    background: $base-color;
    padding: 16px;
    margin-bottom: 16px;
    text-align: left;
  }
}

.modal-enter-active, .modal-leave-active{
  transition: opacity 0.4s;
  .modal-windo{
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active{
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  .modal-window{
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>