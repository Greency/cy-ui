<template>
    <div class="cy-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'RadioGroup',
    props: {
        value: String | Number | Boolean
    }
}
</script>
