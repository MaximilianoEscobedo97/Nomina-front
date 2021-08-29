<template>
  <div class="row">
    <div class='col-1'></div>
    <div class="col-10">
      <list-nomina class="container" />
    </div>
    <div class='col-1'></div>
  </div>
</template>

<script>
import ListNomina from "../components/ListNomina";
export default {
  name: "Nominas",

  components: {
    ListNomina,
  },
  props: {},
  data() {
    return {
        employees: [],
    };
  },
  methods: {
   
  },
};
</script>
