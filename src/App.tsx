const img = require('./assets/logo.png') //eslint-disable-line
require('./css/App.css') //eslint-disable-line
import { defineComponent, onMounted, reactive, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld'

export default defineComponent({
  setup: function() {
    const $this = reactive({
      test: 'testttt'
    })

    const state = reactive({
      name: 'jokcy'
    })

    const numberRef = ref(1)
    onMounted(() => {
      setInterval(() => {
        state.name += '1'
        numberRef.value += 1
      }, 1000)
      setInterval(() => {
        $this.test += '1'
      }, 1000)
    })
    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={img} alt="Vue logo"/>
          <p>{state.name + number}</p>
          <input type='text' v-model={state.name}/>
          <HelloWorld age={123}/>
        </div>
      )
      // return h('div', {id: 'app'}, [
      //   h('img', {alt: 'Vue logo', src: img}),
      //   h('p', {}, state.name),
      //   h('p', $this.test + numberRef.value)
      // ]);
    }
  }
})
