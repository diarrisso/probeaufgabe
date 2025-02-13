<template>

    <div
        :class="[modalShow ? 'block' : 'hidden']"
        class="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
        @click="closeModal"
    ></div>
    <transition name="modal-fade">
        <div
            :class="[modalShow ? 'block' : 'hidden']"
            class="fixed inset-0 z-50 flex justify-center items-center"
        >
            <div class="relative w-full max-w-2xl max-h-full bg-white rounded-lg shadow-sm">

                <div class="p-6">

                <span
                    @click="closeModal"
                    class="text-4xl cursor-pointer absolute top-4 right-4"
                >
          &times;
        </span>

                    <h2 class="font-bold font-poppins text-4xl mb-4">
                        {{ title }}
                    </h2>


                    <p class="font-light font-barlow text-2xl">
                        {{ description }}
                    </p>


                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">

const emit = defineEmits(['close-modal']);

const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    modalShow: {
        type: Boolean,
        default: false,
    },
});


function closeModal() {
    emit('close-modal');
}
</script>