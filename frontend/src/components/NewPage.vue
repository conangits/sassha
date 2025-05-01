<template>
    <div class="new-page">
        <button class="large-red-button">Большая красная кнопка</button>
    </div>
</template>

<script setup>
</script>

<style scoped>
.new-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.large-red-button {
    background-color: red;
    color: white;
    font-size: 2.5rem;
    padding: 1.5rem 3rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.large-red-button:hover {
    background-color: darkred;
}
</style>
