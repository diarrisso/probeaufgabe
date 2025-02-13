<template>
    <section class="bg-gradient-to-r from-green-50 to-secondary text-white"
             :style="{ marginRight: 'calc(15% - 0.5rem)' }" id="newsletter">
        <div class="flex flex-col items-center  p-8 w-full mx-auto">
            <span class="font-barlow font-bold">Newsletter</span>
            <h2 class="font-bold font-poppins text-3xl text-nowrap">Nichts verpassen!</h2>
            <div class="font-light text-1xl font-barlow py-2 text-center ">At wero iquam erat volutpat . Nullam
                scelerisque auctor libero
            </div>
            <Button
                title="Newsletter abonnieren"
                class-name=""
                variant="newsletter"
                type="button"
                class="font-barlow text-nowrap block w-64 mt-3 hover:bg-green-400 hover:font-bold focus:border-2"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
import Button from "~/components/Button.vue";
</script>
