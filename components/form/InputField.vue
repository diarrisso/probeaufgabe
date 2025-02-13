<template>
    <div class='sm:col-span-4'>
        <label
            class="lock text-gray-700 text-sm font-bold mb-2" :for="name">
            {{ label }} :
        </label>
        <div class="mt-2">
            <input
                :class="[
                 type === 'text' || type === 'email'
                 ? 'block w-full rounded-md mb-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                 : type === 'checkbox'
                 ? 'w-4 h-4 border-2 border-blue-500 rounded-sm bg-white'
                 : ''
                 ]"
                :type="type"
                :id="id"
                :name="name"
                v-bind="$attrs"
                v-model="inputValue"
            />
            <div v-if="error" class="text-red-500" :id="`${name}_feedback`">{{ error }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    id: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    label: {
        type: String,
        required: false
    },
    error: {
        type: String,
        default: '',
        required: false
    }
});

const emit = defineEmits(['update:value']);

const inputValue = ref();

watch(inputValue, (newVal) => {
    emit('update:value', newVal);
});


</script>