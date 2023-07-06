<template>
  <div id="app">
    <header>
      <nav>
        <ul>
         <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/photow' }"><router-link to="/photow" class="nav-link">Photo</router-link></li>
          <li :class="{ 'active': $route.path === '/stopwatchw' }"><router-link to="/stopwatchw" class="nav-link">Stopwatch</router-link></li>
          <li :class="{ 'active': $route.path === '/gamew' }"><router-link to="/gamew" class="nav-link">Game</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*{
  box-sizing: border-box;
  
}
#app {
  text-align: center;
}
body {
  background-color: #CBE4DE;
}
header {
  background: #2E4F4F;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap; 
}

nav li {
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family:Arial, Helvetica, sans-serif;
}

nav a:hover {
  background-color: #0E8388; 
  text-decoration: none;
}

.active {
  background-color: #0E8388;
  border-radius: 4px;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center; /* Added */
  }

  nav li {
    width: auto; /* Modified */
    margin: 0 5px; /* Added */
  }
}
</style>