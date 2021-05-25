<template>
  <span ref="content"/>
</template>

<script>
import { ref, unref, onMounted, watch, nextTick } from 'vue'
import Iconify from '@purge-icons/generated'

export default {
  name: 'D2Iconify',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const content = ref(null)

    async function reload () {
      if (!props.icon) return
      const dom = unref(content)
      if (!dom) return
      await nextTick()
      const svg = Iconify.getSVG(props.icon, {})
      dom.innerHTML = svg || ''
    }

    onMounted(() => reload())

    watch(() => props.icon, reload, { flush: 'post' })

    return {
      content
    }
  }
}
</script>
