<template>
    <section class="bg-primary  rounded-tr-xl" :style="{ marginRight: 'calc(15% - 0.5rem)' }" id="service">
        <div
            class="flex  w-full justify-content  flex-col md:flex-row items-stretch gap-8 lg:gap-0 lg:w-3/4 mx-auto py-8 rounded-tr-xl">

            <ServiceJobContent
                title="Keine Angst wir beißen nicht."
                subtitle="service"
                description="Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae. Aliquam erat."
                button-title="Kontakt"
                @button-click="openModal"
            />

            <ServiceJobContent
                title="Du willst ein Tein von uns sein?"
                subtitle="Jobs"
                description="Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae Aliquam."
                buttonTitle="JobsAngebote"
            />

            <ContactForm :is-open="isModalOpen" @close-modal="closeModal"/>
        </div>
    </section>
</template>
<script setup lang="ts">
import ServiceJobContent from "~/components/ServiceJobContent.vue";
import ContactForm from "~/components/section/ContactForm.vue";

const isModalOpen = ref(false);
const isOpen = ref(false)

function openModal() {
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

</script>