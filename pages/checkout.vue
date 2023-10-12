<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import {useUserStore} from '~/store/user'
const userStore = useUserStore()

let stripe = null
let elements = null
let card = null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress = ref(null)
let isProcessing = ref(false)

onMounted(() => {
  isProcessing.value = true

  userStore.checkout.forEach(item => {
    total.value += item.price
  })
})
</script>

<style scoped>

</style>