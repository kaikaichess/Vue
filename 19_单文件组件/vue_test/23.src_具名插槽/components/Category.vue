<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot name="center">默认值，当使用者没有传值时显示</slot>
        <slot name="footer">默认值，当使用者没有传值时显示</slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryIndex',
    props: ['title']
}
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>