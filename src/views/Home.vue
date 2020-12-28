<template>
  <div class="home">
    <navbar />

    <main>
      <discover />
      <projects />
      <goals />
      <team />
      <contactUs />
      <foots />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import discover from "@/components/discover.vue";

import projects from "@/components/projects.vue";
import goals from "@/components/goals.vue";
import team from "@/components/team.vue";
import contactUs from "@/components/contactUs.vue";

import foots from "@/components/foots.vue";

export default {
  name: "Home",
  components: {
    navbar,
    discover,
    projects,
    goals,
    team,
    contactUs,
    foots,
  },
};
</script>
