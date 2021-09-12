<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
    height: 4em;
}

ul {
  display: flex;
  position: absolute;
}
ul li {
  padding: 1em 0.3em;
  list-style: none;
}
ul a {
  text-decoration: none;
  color: black;
  background-color: cornsilk;
}
nav a {
  /* border: 1px solid black; */
  border-radius: 6px;
  padding: 0.5em;
}
a.router-link-exact-active {
  background-color: darkgrey;
}

@media screen and (min-width: 480px) {
  ul {
    position: static;
    display: flex;
  }
  ul li {
    padding: 1em 0.3em;
    list-style: none;
  }
  ul a {
    text-decoration: none;
  }
  nav a {
    border: 1px solid rgb(117, 113, 113);
    border-radius: 6px;
    padding: 0.5em;
  }
  a.router-link-exact-active {
    background-color: darkgrey;
  }
}
</style>