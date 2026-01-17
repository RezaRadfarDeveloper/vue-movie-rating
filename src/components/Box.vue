<template>
  <div className="box">
    <button className="btn-toggle">
      {{ true ? '–' : '+' }}
    </button>
    <Slot v-if="true"></Slot>
  </div>
</template>
