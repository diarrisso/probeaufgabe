<template>
    <header>
        <nav class="navbar flex">
            <div class="navbar_items flex justify-between">
                <div>
                    <a href='/' class='logo'>
                        <img src="/assets/images/logo-new.png" alt='Logo'/>
                    </a>
                </div>
                <div class="hamburger font-barlow font-light uppercase" @click="isActive = !isActive"
                     :class="{active: isActive, 'closing': !isActive}">
                    Menü
                    <span class="bg-blue-200"></span>
                    <span class="bg-pink-900"></span>
                </div>

                <div
                    class="overlay"
                    :class="{active: isActive}">
                    <ul class="nav-links font-poppins font-bold">
                        <li>
                            <NuxtLink to="#partner" @click="isActive = !isActive">Shopware Partner</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#service" @click="isActive = !isActive">Service</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#job" @click="isActive = !isActive">Jobs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#newsletter" @click="isActive = !isActive">Newsletter</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#contact" @click="isActive = !isActive">Kontakt</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script setup lang="ts">

const closing = ref(false)
const isActive = ref(false);

const menuHambuherToggler = () => {
    isActive.value = true;
    closing.value = true;
}

</script>

<style lang="scss">

</style>