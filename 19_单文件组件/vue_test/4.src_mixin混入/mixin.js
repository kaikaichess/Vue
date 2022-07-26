export const mixin1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    }
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}