<template>
    <div>
        <OnThisPage v-if="$frontmatter.showOnThisPage" />
        <Content />
    </div>
</template>

<script>
import OnThisPage from "./components/OnThisPage.vue";

export default {
    components: {
        OnThisPage,
    },
};
</script>
