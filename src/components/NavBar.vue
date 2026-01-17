<template>
  <nav className="nav-bar">
    <Logo />
    <slot></slot>
  </nav>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
  setup() {},
};
</script>
