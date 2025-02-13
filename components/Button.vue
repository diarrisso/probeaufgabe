<template>
    <button
        class="text-center cursor-pointer py-2.5 px-5 me-2 mb-2  border  "
        :type="type"
        :class="{
          btn: true,
          'gray': variant === 'service',
          'green': variant === 'newsletter',
          className
        }"
        @click="buttonClick"
    >

        {{ title }}
    </button>
</template>

<script setup lang="ts">

const emits = defineEmits(['button-click']);

const props = defineProps<{
    type?: "submit" | "button" | "reset" | undefined;
    variant?: "submit" | "service" | "newsletter";
    className?: string | object | undefined;
    title?: string;

}>();


const {type, variant, className, title} = props;

function buttonClick() {
    emits('button-click');
}

</script>
