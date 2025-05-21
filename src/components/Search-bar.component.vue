<script setup>
import { InputText } from 'primevue'
</script>
<template>
    <div class="h-[80px] grid grid-flow-col grid-cols-2 items-center">
        <InputText
            class="search-input-field"
            type="test"
            name="search-criteria"
            placeholder="Search Event"
            variant="filled"
        ></InputText>
        <div class="flex justify-end gap-4">
            <i class="pi pi-th-large"></i>
            <i class="pi pi-filter-fill"></i>
        </div>
    </div>
</template>
<style scoped lang="sass">
.search-input-field
    border: 1px solid #DDDDDD
    background-color: var(--background-gray-variant)
.pi
    color: var(--gray-variant)
    font-size: 1.3rem
    cursor: pointer
.p-inputtext
    padding-inline: 18px
    font-size: 14px
</style>
