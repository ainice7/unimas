<template>
  <footer class="footer">
    <div class="container">
      <a href="/" class="footer-logo">
        <img src="../assets/images/content/logo.png" alt>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
@import "./assets/main.scss";
.footer {
  position: relative;
  bottom: 0;
  background-color: $primary-background;
  min-height: 55px;
  display: flex;
  align-items: center;

  .container {
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .footer-logo {
    padding-right: 15px;

    img {
      max-width: 105px;
    }
  }
}
</style>
