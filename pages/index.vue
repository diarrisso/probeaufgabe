<template>
    <PartnerSLide/>
    <Partner/>
    <ServiceJobs/>
    <Newsletter/>
</template>
<script setup lang="ts">
import PartnerSLide from "~/components/section/PartnerSLide.vue";
import Partner from "~/components/section/Partner.vue";
import ServiceJobs from "~/components/section/ServiceJob.vue";
import Newsletter from "~/components/section/Newsletter.vue";

definePageMeta({
    layout: 'default'
});
</script>
