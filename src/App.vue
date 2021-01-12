<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <p>{{ name }}</p>
  <p>{{ name2 }}</p>
  <p>{{ ref2 }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

interface Config {
  name: string
}

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld: HelloWorld
  },
  mounted() {
    console.log(this.name, '-------------->')
  },
  setup(props, { slots, attrs, emit }) {
    // const state = reactive({
    //   name: 'jokcy'
    // })
    const nameRef = ref('Jokcy')
    const ref2 = ref(123)

    setInterval(() => {
      nameRef.value += '1'
    }, 5000)

    setInterval(() => {
      ref2.value += 10
    }, 1000)

    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })

    watchEffect(() => {
      console.log(nameRef.value)
    })

    return {
      name: nameRef,
      name2: computedNameRef,
      ref2: ref2
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
