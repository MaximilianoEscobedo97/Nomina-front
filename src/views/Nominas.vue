<template>
  <div class="row">
    <div class='col-1'></div>
    <div class="col-10">
       <h1 class="text-center">Lista de nominas</h1>
       <el-card class="box-card">
        <list-nomina class="container" />
       </el-card>
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
