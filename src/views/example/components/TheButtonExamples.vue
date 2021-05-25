<template>
  <ExampleSection title="基础">
    <D2Button>button</D2Button>
  </ExampleSection>
  <ExampleSection title="多色">
    <D2Button v-for="color in colors" :key="color" :color="color">{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="尺寸">
    <D2Button>base</D2Button>
    <D2Button v-for="size in sizes" :key="size" :size="size">{{ size }}</D2Button>
  </ExampleSection>
  <ExampleSection title="朴素按钮">
    <D2Button plain>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" plain>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="圆角按钮">
    <D2Button round>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" round>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="圆形按钮">
    <D2Button circle>
      <span class="block w-5 text-sm">D</span>
    </D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" circle>
      <span class="block w-5 text-sm">D</span>
    </D2Button>
  </ExampleSection>
  <ExampleSection title="圆形按钮">
    <D2Button>button</D2Button>
    <D2Button round>button</D2Button>
    <D2Button circle>
      <span class="block w-5 text-sm">D</span>
    </D2Button>
  </ExampleSection>
  <ExampleSection title="禁用状态">
    <D2Button disabled>disabled</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" disabled>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="禁用状态 朴素按钮">
    <D2Button plain disabled>disabled</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" plain disabled>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="文字按钮">
    <D2Button text>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" text>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="文字按钮 轮廓">
    <D2Button text ring>ring</D2Button>
    <D2Button text round ring>round ring</D2Button>
    <D2Button color="indigo" text ring>indigo ring</D2Button>
    <D2Button color="indigo" text round ring>indigo round ring</D2Button>
  </ExampleSection>
  <ExampleSection title="文字按钮 禁用状态">
    <D2Button text disabled>disabled</D2Button>
    <D2Button color="indigo" text disabled>indigo disabled</D2Button>
  </ExampleSection>
  <ExampleSection title="轮廓">
    <D2Button ring>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" ring>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="轮廓间隔">
    <D2Button ring ring-offset>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" ring ring-offset>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="轮廓间隔 2">
    <D2Button :ring-offset="2" ring>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" :ring-offset="2" ring>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="轮廓宽度 4">
    <D2Button :ring-width="4" ring>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" :ring-width="4" ring>{{ color }}</D2Button>
  </ExampleSection>
  <ExampleSection title="轮廓间隔 2 轮廓宽度 4">
    <D2Button :ring-width="4" :ring-offset="2" ring>button</D2Button>
    <D2Button v-for="color in colors" :key="color" :color="color" :ring-width="4" :ring-offset="2" ring>{{ color }}</D2Button>
  </ExampleSection>
</template>

<script>
import { colors, sizes } from 'd2-components/utils/const.js'
import ExampleSection from './ExampleSection.vue'

export default {
  components: {
    ExampleSection
  },
  setup () {
    return {
      colors,
      sizes
    }
  }
}
</script>
