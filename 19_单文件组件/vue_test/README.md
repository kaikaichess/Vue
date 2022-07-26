# ref属性
    1.被用来给元素或子组件注册引用信息（id属性的替代）
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是其对应的组件实例对象
    3.使用方法；
        打标识：<h1 ref="xxx"></h1> 或 <SchoolIndex ref="xxx"/>
        获取：this.$refs.xxx