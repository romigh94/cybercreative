<template>
    <div>
        <MainBannerVue />
        <ServiceSectionVue />
        <ContactSectionVue />

    </div>
</template>

<script>

import MainBannerVue from '@/components/Home/MainBanner.vue';
import ServiceSectionVue from '@/components/Home/ServiceSection.vue';
import ContactSectionVue from '@/components/Home/ContactSection.vue'

  export default {
    components: {
        MainBannerVue, ServiceSectionVue, ContactSectionVue
    }
  }
</script>