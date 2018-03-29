<template>
    <RadSideDrawer ref="drawer" @drawerClosed="onDrawerClosed" @drawerOpened="onDrawerOpened">
        <StackLayout ~mainContent ref="mainContent">
            <slot></slot>
        </StackLayout>
        <StackLayout ~drawerContent ref="drawerContent" class="sideStackLayout">
            <!--<ListView for="link in menuLinks" @itemTap="navigateToLink">-->
            <ListView for="link in menuLinks">
                <v-template>
                    <Label :text="link.title" />
                </v-template>
            </ListView>
        </StackLayout>
    </RadSideDrawer>
</template>

<script>
//    import {mapActions} from 'vuex'
    export default {
        mounted() {
            const drawerView = this.$refs.drawer.nativeView
            drawerView.drawerContent = this.$refs.drawerContent.nativeView
            drawerView.mainContent = this.$refs.mainContent.nativeView
        },
        computed: {
            menuVisibility() {
                return this.$store.getters.isVisible
            }
        },
        watch: {
            menuVisibility(value) {
                if(value) {
                    this.$refs.drawer.nativeView.showDrawer()
                }else if(!value){
                    this.$refs.drawer.nativeView.closeDrawer()
                }
            }
        },
        methods: {
//            ...mapActions({
//                authLogout: 'AUTH_LOGOUT'
//            }),
            onDrawerClosed() {
                this.$store.commit('CLOSE_DRAWER')
            },
            onDrawerOpened() {
                this.$store.commit('OPEN_DRAWER')
            }
//            navigateToLink(event) {
//                if(event.item.url != '/logout'){
//                    this.$store.commit('CLOSE_DRAWER')
//                    this.$router.push(event.item.url)
//                }else{
//                    this.authLogout()
//                        .then(()=>{
//                            this.$router.push('/login')
//                        })
//                }
//            }
        },
        data() {
            return {
                menuLinks: [
                    {title: 'Accueil', url: '/home'},
                    {title: 'Formulaires', url: '/forms'},
                    {title: 'Déconnexion', url: '/logout'}
                ]
            }
        }
    }
</script>

<style scoped>
    .sideStackLayout {
        background-color: gray;
    }
    .sideStackLayout Label {
        color: white;
        font-size: 26;
    }
</style>