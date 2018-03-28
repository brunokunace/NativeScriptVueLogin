<template>
  <Page class="page">
    <ActionBar title="RadSideDrawer"></ActionBar>
    <RadSideDrawer ref="drawer"  drawerTransition="PushTransition">

      <StackLayout ~mainContent>
        <Label :text="mainContentText" textWrap="true" fontSize="13" padding="10" />
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
    export default {
        data () {
            return {
                mainContentText: "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
                + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.",

            };
        },
    };
</script>

<style scoped>
  Label {
    color: red;
  }
</style>