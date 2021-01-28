new Vue({
    el: "#app",
    data: {
        currentView: 'first_art'
    },
    components: {
        first_art: {
            template: '#first_art_template'
        },
        second_art: {
            template: '#second_art_template'
        },
        third_art: {
            template: '#third_art_template'
        },
        
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})