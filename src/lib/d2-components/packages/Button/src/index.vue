<template>
  <button
    :class="buttonClassNames"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="type"
    @click="handleClick">
    <slot/>
  </button>
</template>

<script>
import { computed } from 'vue'
import classNames from 'classnames'
import { useGlobalConfig } from '../../../utils/config.js'
import {
  isValidColor,
  isValidSize,
  isValidButtonTypes,
  isBoolean,
  isIntegerAndBetween
} from '../../../utils/helper.js'

export default {
  name: 'D2Button',
  props: {
    color: { type: String, default: '', validator: value => !value || isValidColor(value) },
    size: { type: String, default: '', validator: value => !value || isValidSize(value) },
    type: { type: String, default: 'button', validator: value => isValidButtonTypes(value)},
    autofocus: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    ring: { type: Boolean, default: false },
    ringOffset: { type: [Number, Boolean], default: false, validator: value => isBoolean(value) || isIntegerAndBetween(value, 0, 4) },
    ringWidth: { type: Number, default: 2 }
  },
  emits: [
    'click'
  ],
  setup (props) {
    const $D2COMPONENT = useGlobalConfig()
    
    const buttonRingOffset = computed(() => {
      const offset = props.ringOffset
      return Number.isFinite(offset) ? offset : (offset ? 1 : 0)
    })
    
    const buttonDisabled = computed(() => props.disabled)
    
    const buttonSize = computed(() => props.size || $D2COMPONENT.size)
    
    const buttonClassNames = computed(() => {
      return classNames(
        'd2-button',
        {
          'is-plain': props.plain,
          'is-round': props.round,
          'is-circle': props.circle,
          'is-ring': props.ring,
          'is-disabled': props.disabled,
          'is-text': props.text,
          [`d2-button--${buttonSize.value}`]: buttonSize.value,
          [`d2-button--${props.color}`]: props.color,
          [`is-ring-offset-width-${buttonRingOffset.value}`]: props.ring,
          [`is-ring-width-${props.ringWidth}`]: props.ring
        }
      )
    })

    const handleClick = event => {
      emit('click', event)
    }
    
    return {
      buttonClassNames,
      buttonDisabled,
      handleClick
    }
  }
}
</script>
