<template>
    <div class="on-this-page">
        <strong>On This Page</strong>
        <ul>
            <li v-for="heading in headings">
                <a :href="`#${heading.id}`">{{ heading.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const headings = ref([]);

const collectHeadings = () => {
    const headings = [];
    const headingElements = document.querySelectorAll("h2, h3, h4, h5, h6");
    headingElements.forEach((heading, index) => {
        const text = heading.innerText;
        const id = `heading-${index}`;
        heading.setAttribute("id", id);
        headings.push({ text, id });
    });
    return headings;
};

onMounted(() => {
    headings.value = collectHeadings();
});
</script>

<style scoped>
.on-this-page {
    position: fixed;
    top: 20%;
    right: 20px;
    background-color: #f8f8f8;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 8px;
}
</style>
