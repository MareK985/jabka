<template>
    <div>
        <transition name="modal-fade">
            <!-- <div class="modal-backdrop"> -->
                <div class="modal"         
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription">
                    <header class="modal-header" id="modalTitle">
                        <slot name="header">
                        </slot>
                        <button
                            type="button"
                            class="btn-close"
                            @click="close"
                            aria-label="Close modal"
                        >
                            x
                        </button>
                        
                    </header>
                    <section class="modal-body">
                        <slot name="body">
                        I'm the default body!
                        </slot>
                    </section>
                    <footer class="modal-footer" id="modalDescription">
                        <slot name="footer">
                        </slot>
                        <!-- <button
                            type="button"
                            class="btn-green"
                            @click="close"
                            aria-label="Close modal"
                            >
                            CLOSE
                        </button> -->
                    </footer>
                </div>
            <!-- </div> -->
        </transition>
    </div>
</template>

<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>

.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0.5;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

.modal-backdrop {
    /* position: fixed; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .modal {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

</style>