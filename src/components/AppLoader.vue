<script setup></script>

<template>
  <div class="app-loader">
    <div class="app-loader__circle">
      <span></span>
    </div>
  </div>
</template>

<style>
.app-loader {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 2rem;
}

.app-loader__circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  font-family: sans-serif;
  color: var(--color-orange);
  text-shadow: 0 0 10px var(--color-orange);
  box-shadow: var(--color-shadow);
}
.app-loader__circle::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--color-orange);
  border-right: 3px solid var(--color-orange);
  border-radius: 50%;
  animation: animateCircle 2s linear infinite;
}

@keyframes animateCircle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>