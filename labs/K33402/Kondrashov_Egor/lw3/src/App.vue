<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --accent-color: #2e7a17;
  --accent-on-hover: #256312;
  --background-color: #f5f5f5;
  --nav-link-on-hover: #34dfeb;
  --text-color: #212529;
  --accent-text: white;
  --form-background: white;
  --form-border-color: #86b7fe;
  --link-color: #3221d9;
}
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.text-white {
  color: var(--accent-text) !important;
}

.form-control {
  background-color: var(--form-background);
  color: var(--text-color);
}

.form-control:focus {
  background-color: var(--form-background);
  color: var(--text-color);
}
.btn {
  background-color: var(--accent-color);
  color: var(--accent-text);
  margin: 10px auto;
  font-size: calc(1.3rem + 0.6vw);
  border-radius: 10px;
  padding: 5px 40px;
}

.btn:hover {
  background-color: var(--accent-on-hover);
  color: var(--accent-text);
}
.link-primary {
  color: var(--link-color);
}
</style>
