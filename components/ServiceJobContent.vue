<template>
    <div class="flex  justify-end  flex-wrap flex-col w-full px-4 lg:2/5 xl:w-3/5 mx-auto max-h-96 overflow-y-auto"
         id="contact">
        <span class="text-border uppercase leading-[1.2] tracking-[1px]">{{ subtitle }}</span>
        <h2 class="text-3xl font-bold font-poppins mt-2 mb-2">{{ title }}</h2>
        <p class="font-barlow font-light mb-6 flex-grow">{{ description }}</p>

        <Button
            type="button"
            :title="buttonTitle"
            @button-click="$emit('button-click')"
            variant="service"
            class="w-40 text-center cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  hover:font-bold hover:font-poppins focus:z-10 focus:ring-4 focus:ring-gray-100"
        />


    </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";

const props = defineProps({
    title: {
        type: String,
        required: false
    },
    subtitle: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    buttonTitle: {
        type: String,
        required: true
    },

    buttonClick: {
        type: Function,
        required: false,
    },
})

</script>