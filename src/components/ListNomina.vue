<template>
  <div>
    <h1 class="text-center">Lista de nominas</h1>
      <el-button type="primary" class="">Crear Nomina</el-button>
    <DxDataGrid
      :data-source="dataSource"
      key-expr="id"
      :allow-column-resizing="true"
      :show-borders="true"
      :column-resizing-mode="currentMode"
      :column-hiding-enabled="true"
      :column-auto-width="true"
    >
      <DxFilterRow
        :visible="true"
      />
      <DxHeaderFilter
        :visible="true"
      />
      <DxSearchPanel
        :visible="true"
        :width="240"
        placeholder="buscar..."
      />
    <DxColumn
        caption="Nombre"
        data-field="name"
        data-type="string"
      />
    <DxColumn
        caption="Apellido Paterno"
        data-field="last_name"
        data-type="string"
      />
    <DxColumn
         caption="Apellido Materno"
        data-field="second_last_name"
        data-type="string"
      />
      <DxColumn
        caption="Correo"
        data-field="email"
        data-type="string"
      />
      <DxColumn
         caption="Tipo de Contrato"
        data-field="type_of_contract"
        data-type="string"
      />
    <DxColumn
        caption="Estado"
        data-field="status"
        data-type="string"
      />
      <DxColumn
        caption="Opciones"
        cell-template="opcions-cell-template"
      />
      <template #opcions-cell-template={data}>
        <el-dropdown size='small' split button type='primary'>
          <span>Opciones</span>
          <el-dropdown-menu>
            <a @click="editNomina(data.row.data.id)" >
              <el-dropdown-item>Editar</el-dropdown-item>
            </a>
            <a @click="deleteNomina(data.row.data.id)" >
              <el-dropdown-item>Elimiar</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>

      </template>


    </DxDataGrid>
  </div>
</template>


<script>
import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow
  } from "devextreme-vue/data-grid";
import axios from "axios";
export default {
  name: "ListNomina",
  props: {
    msg: String,
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow
  },
  data(){
    return {
      dataSource: [],
      currentMode:'nextColumn'
    }
  },
  created(){
    this.getNominas();
  },
  methods:{
     getNominas() {
      axios
        .get("http://localhost/Nomina/public/api/employee")
        .then((response) => {
            this.dataSource = response.data.employees
        });
    },
    editNomina(data){
      console.log(data);
    },
    deleteNomina(data){
      this.$confirm('Estas seguro de eliminar esta nomina?', 'Alerta', {
          confirmButtonText: 'Si',
          cancelButtonText: 'Cancelar',
          type: 'warning'
        }).then(() => {

          axios
        .delete(`http://localhost/Nomina/public/api/employee/${data}`)
        .then((response) => {
            console.log(response)
            this.getNominas();
            this.$message({
            type: 'success',
            message: 'Se elimino con exito!!'
          });
        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Se cancelo eliminacion.'
          });          
        });
    }
  }
};
</script>


