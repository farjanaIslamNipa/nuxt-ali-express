<template>
  <div class="flex justify-start my-2">
    <div class="my-auto">
      <div 
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-start p-0.5 cursor-pointer"
      >
        <div
          @click="isSelected = !isSelected"
          class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
          :class="[
            isHover ? 'border-[#fd374f]' : 'border-gray-300',
            isSelected ? 'bg-[#fd374f]' : ''
          ]"
        >
          <div class="h-[8px] w-[8px] rounded-full bg-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserStore} from '~/store/user'
const userStore = useUserStore()

const props = defineProps(['product', 'selectedArray'])
const { product, selectedArray } = toRefs(props)

const emit = defineEmits(['selectedRadio'])

const isHover = ref(false)
const isSelected = ref(false)

const removeFromCart = () => {
  userStore.cart.forEach((prod, index) => {
    userStore.cart.splice(index, 1)
  })
}

watch(() => isSelected.value, (val) => {
  emit('selectedRadio', {id: product.value.id, val:val})
})
</script>