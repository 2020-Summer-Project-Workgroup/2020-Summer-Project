<template>
  <div class="welcome">
    <h1 data-spotlight="欢迎来到2020暑期小学期">欢迎来到2020暑期小学期</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
.welcome {
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.welcome h1 {
  color: #333;
  font-family: "Hiragino Sans GB", Helvetica;
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 7.5vw;
  letter-spacing: -0.3rem;
}

.welcome h1::after {
  content: attr(data-spotlight);
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-clip-path: ellipse(150px 150px at 0%);
  clip-path: ellipse(150px 150px at 0%);
  animation: spotlight 5s infinite;
  background-image: url("~assets/img/welcome/Lighting.jpg");
  background-size: 150%;
  background-position: center center;
  -webkit-background-clip: text;
}

@keyframes spotlight {
  0% {
    -webkit-clip-path: ellipse(150px 150px at 0%);
    clip-path: ellipse(150px 150px at 0%);
  }
  50% {
    -webkit-clip-path: ellipse(150px 150px at 100%);
    clip-path: ellipse(150px 150px at 100%);
  }
  100% {
    -webkit-clip-path: ellipse(150px 150px at 0%);
    clip-path: ellipse(150px 150px at 0%);
  }
}
</style>