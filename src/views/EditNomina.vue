<template>
  <div class="row">
    <div class='col-1'></div>
    <div class="col-10">
      <h1 class="text-center">Editar Nomina</h1>
       <el-card class="box-card">
            <form-nomina class="container" :method="method" :id="this.$route.params.id" />
        </el-card>
    </div>
    <div class='col-1'></div>
  </div>
</template>

<script>
import FormNomina from "../components/FormNomina";
export default {
  name: "EditNomina",

  components: {
    FormNomina,
  },
  props: {},
  data() {
    return {
        method:'update',
    };
  },
  created(){
  },
  methods: {
   
  },
};
</script>