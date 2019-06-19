<template>
    <div class="cy-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CheckboxGroup',
    props: {
        value: Array
    }
}
</script>
