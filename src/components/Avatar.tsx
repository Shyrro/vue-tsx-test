import { defineComponent } from "vue";

export const Avatar = defineComponent({
  props: {
    foo: {
      type: String,
      required: true
    },
  },
  setup(_, { attrs }) {

    return () => <div {...attrs}>hello</div>
  }
})