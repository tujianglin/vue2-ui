<template>
  <WMSearchInput @search="handleSearch"></WMSearchInput>
</template>

<script>
  export default {
    methods: {
      handleSearch(val) {
        console.log(val);
      },
    },
  };
</script>
