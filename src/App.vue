<template>
  <NavBar>
    <Search />
  </NavBar>
  <Main>
    <Box></Box>
    <Box></Box>
  </Main>
</template>
<script>
import Box from './components/Box.vue';
import Main from './components/Main.vue';
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';

export default {
  components: {
    NavBar,
    Search,
    Main,
    Box,
  },
  setup() {},
};
</script>
