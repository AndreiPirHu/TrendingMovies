<script setup>
  import { computed, ref, watch } from 'vue'

  let roundedRating = ref(0)
  let chosenRating = ref(0)

  let isHovered = ref(false)

  const emit = defineEmits(['rating-chosen'])
  const props = defineProps({ rating: { required: true, type: Number } })

  roundedRating.value = computed(() => props.rating.toFixed(1))

  watch(
    () => chosenRating.value,
    (newValue) => {
      emit('rating-chosen', newValue)
    }
  )
</script>

<template>
  <div
    @mouseenter="() => (isHovered = true)"
    @mouseleave="() => (isHovered = false)"
  >
    <div v-if="!isHovered" class="flex justify-end items-center cursor-pointer">
      <svg
        :class="`w-8 h-8 fill-current text-yellow-400
        }`"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
        />
      </svg>
      <h3 class="text-white">{{ roundedRating.value }}</h3>
    </div>

    <div v-else class="flex justify-end">
      <label class="inline-flex items-center">
        <input
          type="radio"
          v-model="chosenRating"
          name="rating"
          :value="1"
          class="hidden"
        />
        <svg
          :class="`w-8 h-8 fill-current text-gray-400 hover:text-yellow-400  ${
            chosenRating > 0 ? 'text-yellow-500' : ''
          }`"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
          />
        </svg>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          v-model="chosenRating"
          name="rating"
          :value="2"
          class="hidden"
        />
        <svg
          :class="`w-8 h-8 fill-current text-gray-400 hover:text-yellow-400  ${
            chosenRating > 1 ? 'text-yellow-500' : ''
          }`"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
          />
        </svg>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          v-model="chosenRating"
          name="rating"
          :value="3"
          class="hidden"
        />
        <svg
          :class="`w-8 h-8 fill-current text-gray-400 hover:text-yellow-400  ${
            chosenRating > 2 ? 'text-yellow-500' : ''
          }`"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
          />
        </svg>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          v-model="chosenRating"
          name="rating"
          :value="4"
          class="hidden"
        />
        <svg
          :class="`w-8 h-8 fill-current text-gray-400 hover:text-yellow-400  ${
            chosenRating > 3 ? 'text-yellow-500' : ''
          }`"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
          />
        </svg>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          v-model="chosenRating"
          name="rating"
          :value="5"
          class="hidden"
        />
        <svg
          :class="`w-8 h-8 fill-current text-gray-400 hover:text-yellow-400  ${
            chosenRating > 4 ? 'text-yellow-500' : ''
          }`"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.276l2.583 6.32h6.61c.354.023.512.46.232.718l-5.175 4.454 1.857 6.062c.113.37-.307.676-.622.442L12 17.08l-4.485 3.252c-.315.233-.734-.072-.622-.442l1.857-6.062-5.175-4.454c-.28-.258-.122-.695.232-.718h6.61L12 2.276z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>
