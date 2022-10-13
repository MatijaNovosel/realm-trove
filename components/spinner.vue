<template>
  <div class="container">
    <div class="diamond-container-t">
      <div class="diamond t-anim" />
    </div>
    <div class="diamond-container-b">
      <div class="diamond b-anim" />
    </div>
    <div class="diamond-container-r">
      <div class="diamond r-anim" />
    </div>
    <div class="diamond-container-l">
      <div class="diamond l-anim" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 66px;
  width: 0px;
}

.diamond-container-t {
  position: absolute;
}

.diamond-container-b {
  position: absolute;
  top: 36px;
}

.diamond-container-l {
  position: absolute;
  top: 18px;
  left: -18px;
}

.diamond-container-r {
  position: absolute;
  top: 18px;
  left: 18px;
}

.diamond {
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom-color: #443f3f;
  position: relative;
  top: -15px;
  animation: flash-white 0.5s linear infinite;
}

.diamond:after {
  content: "";
  position: absolute;
  left: -15px;
  top: 15px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top-color: #443f3f;
  animation: flash-white-inner 0.5s linear infinite;
}

.r-anim {
  animation-delay: 0.125s;
}

.b-anim {
  animation-delay: 0.25s;
}

.l-anim {
  animation-delay: 0.375s;
}

.r-anim:after {
  animation-delay: 0.125s;
}

.b-anim:after {
  animation-delay: 0.25s;
}

.l-anim:after {
  animation-delay: 0.375s;
}

@keyframes flash-white {
  from {
    border-bottom-color: white;
  }

  25% {
    border-bottom-color: #443f3f;
  }
}

@keyframes flash-white-inner {
  from {
    border-top-color: white;
  }

  25% {
    border-top-color: #443f3f;
  }
}
</style>
