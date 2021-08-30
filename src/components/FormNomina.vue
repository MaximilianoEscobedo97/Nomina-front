<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Nombre" prop="name">
    <el-input v-model="ruleForm.name" placeholder="Nombre" :disabled="method == 'view'" ></el-input>
  </el-form-item>
  <el-form-item label="Primer Apellido" prop="last_name">
    <el-input v-model="ruleForm.last_name" placeholder="Apellido" :disabled="method == 'view'" ></el-input>
  </el-form-item>
  <el-form-item label="Segundo Apellido" prop="second_last_name">
    <el-input v-model="ruleForm.second_last_name" placeholder="Segundo Apellido" :disabled="method == 'view'" ></el-input>
  </el-form-item>
   <el-form-item label="Email" prop="email">
    <el-input v-model="ruleForm.email" placeholder="Email" :disabled="method == 'view'" ></el-input>
  </el-form-item>
   <el-form-item label="Codigó" prop="code">
    <el-input v-model="ruleForm.code" placeholder="Codigó" :disabled="method == 'view'" ></el-input>
  </el-form-item>
  <el-form-item label="Tipo de contrato" prop="type_of_contract">
    <el-input v-model="ruleForm.type_of_contract" placeholder="Tipo de contrato" :disabled="method == 'view'" ></el-input>
  </el-form-item>
  <el-form-item label="Estatus" prop="status">
    <el-select v-model="ruleForm.status" placeholder="Estatus" :disabled="method == 'view'" >
      <el-option label="Activo" value="activo"></el-option>
      <el-option label="Inactivo" value="inactivo"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item>
    <el-button v-if="method != 'view'" type="primary" @click="submitForm('ruleForm')">Completar</el-button>
    <el-button @click="home()">Regresar</el-button>
  </el-form-item>
</el-form>  
</template>

<script>
import axios from "axios";
  export default {
    props:{
      method:{
        required:true
      },
       id:{
        required:false
      }
    },
    data() {
      return {
        ruleForm: {
          name: '',
          last_name:'',
          second_last_name:'',
          email:'',
          type_of_contract:'',
          code:'',
          status:'',
        },
        rules: {
          name: [
            { required: true, message: 'El nombre es requerido', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' }
          ],
          last_name: [
            { required: true, message: 'El primer apellido es requerido', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' }
          ],
          second_last_name: [
            { required: true, message: 'El segundo apellido es requerido', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' }
          ],
          email: [
             { required: true, message: 'El email es requerido', trigger: 'blur' },
             { type: 'email', message: 'Escibe un correo valido', trigger: ['blur', 'change'] }
          ],
          code: [
            { required: true, message: 'El codigo es requerido', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' }
          ],
          type_of_contract: [
            { required: true, message: 'El tipo de contrato es requerido', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' }
          ],
          status: [
            { required: true, message: 'Selecciona el estatus', trigger: 'change' }
          ],
        }
      };
    },
    created(){
      console.log(this.method)
      if(this.method == 'update' || this.method == 'view')
        this.insertData();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.method == 'create')
                this.create();
            if(this.method == 'update')
                this.update();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      insertData(){
         axios
          .get(`http://localhost/Nomina/public/api/employee/${this.id}`)
          .then(response => {
            this.ruleForm = response.data.employee
          })
          .catch(error => {
            alert('ups algo salio mal',error)
          })
      },
      create(){
        axios
          .post('http://localhost/Nomina/public/api/employee',this.ruleForm)
          .then(response => {
            console.log(response)
            this.home()
          })
          .catch(error => {
            alert('ups algo salio mal',error)
          })
      },
      update(){
        axios
          .put(`http://localhost/Nomina/public/api/employee/${this.id}`,this.ruleForm)
          .then(response => {
            console.log(response)
            this.home()
          })
          .catch(error => {
            alert('ups algo salio mal',error)
          })
      },
      home()
      {
        console.log(this.$router)
        this.$router.push('/')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
