const app = Vue.createApp ({
    // template: '<h1>Hello {{ firstName }}</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser(){
            this.firstName = 'Sam',
            this.lastName = 'Stone',
            this.email = 'Sam@example.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
        async getUserRandom(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)


            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }

    },
})

app.mount('#app')