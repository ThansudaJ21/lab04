<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking fir is not here</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
