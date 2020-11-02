const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(elementIndex) {
      this.goals.splice(elementIndex, 1);
    },
  },
});

app.mount("#user-goals");
