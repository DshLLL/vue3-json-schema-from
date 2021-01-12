import { defineComponent} from 'vue'
const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true
  }
} as const
export default defineComponent({
  props: PropsType,
  setup(props) {
    return ()=>{
      return <div class="hello">
        { props.age }
      </div>
    }
  }
})