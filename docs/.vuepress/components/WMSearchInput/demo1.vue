<template>
  <div>
    <WMSearchInput @search="handleSearch"></WMSearchInput>
  </div>
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
