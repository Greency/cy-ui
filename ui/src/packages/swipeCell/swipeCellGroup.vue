<template>
    <div class="cy-swipe-cell-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SwipeCellGroup',
    data(){
        return {
            index: -1
        }
    }
}
</script>
