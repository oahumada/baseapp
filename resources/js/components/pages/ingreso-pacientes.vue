<template>
<div class="container-fluid">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class='card'>
        <h1 class='card-header'>Ingreso: Programa Pacientes Crónicos</h1>
        <div class="card-body">
        <form action="" class="form">
            <div class='row'>
                
                 <div class="form-group col-md-6 mb-3">
                    <label for="nombre">Nombre:</label>
                    <input type="text" name='nombre' class='form-control'>
                </div>
                 
                 <div class="form-group col-md-6 mb-3">
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" name='apellidos' class='form-control'>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6 mb-3">
                    <label for="derivacion">Derivado desde:</label>
                    <select  name='derivacion' class='form-control'>
                        <option value="1">Vitam</option>
                        <option value="2">Hospital</option>
                        <option value="3">Otro Centro Médico</option>
                    </select>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col" style="text-align: right;">
                <router-link to="/app/home" tag="button" class="btn btn-warning"> <i class="fas fa-angle-left"></i> Volver</router-link>
            </div>
            <div class="col">
                <router-link to="/ingreso" tag="button" class="btn btn-primary"><i class="fas fa-save"></i> Guardar</router-link>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>

    export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '/app/home'
          },
          {
            text: 'Ingreso',
            active: true
          }
        ]
      }
    }
  }
    

    
</script>

<style scoped>

</style>