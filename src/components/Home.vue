<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Miyha">
      <NavigationButton text="Menu" icon="res://ic_list_black_24dp" @tap="toggleDrawer" />
      <StackLayout orientation="horizontal">
        <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
        <Label text="iyha" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
    <SideDrawer>
      <StackLayout>
        <flash-message autoHide variant="success"></flash-message>
        <Label text="Hello world !" />
        <Label textWrap="true">
          <FormattedString>
            <Span text="Welcome " />
            <Span :text="user.firstname" />
          </FormattedString>
        </Label>
        <Label :text="resultToShow" />
        <Button text="available" @tap="isAvailable" />
        <Button text="request auth" @tap="requestAuth" />
        <Button text="query steps" @tap="queryData" />
        <ListView for="item in responseData">
          <v-template>
            <Label :text="item.value" />
          </v-template>
        </ListView>
      </StackLayout>
    </SideDrawer>

  </Page>
</template>

<script>
    export default {
        methods: {
            toggleDrawer() {
                this.$store.commit('TOGGLE_DRAWER')
            }
        }
    }
</script>