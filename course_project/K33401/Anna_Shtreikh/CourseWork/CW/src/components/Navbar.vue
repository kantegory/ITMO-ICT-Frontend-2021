<template>
  <nav>
    <v-btn
      v-for="item in menu"
      :key="item"
      :to="item.link"
      tile
      color="accent"
      elevation="0"
    >
      <span class="font-weight-bold">{{ item.label }}</span>
    </v-btn>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    menu: [],
  }),
  methods: {
    getMenu() {
      this.menu = [
        {
          label: "Наши самолеты",
          link: "/planes",
        },
        {
          label: "Рейсы",
          link: "/flight",
        },
        {
          label: "Наши пассажиры",
          link: "/passengers",
        },
        {
          label: "Купленные билеты",
          link: "/tickets",
        },
        {
          label: "Выйти",
          link: "/logout/",
        },
      ];

      return this.menu;
    },
  },
  created() {
    this.getMenu();
  },
};
</script>
