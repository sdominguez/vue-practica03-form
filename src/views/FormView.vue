<!-- En esta practica enviaremos 3 parametros -->

<template>
    <v-container>
        <v-card>
        <v-row align-content="center" justify="center">
            <v-col cols="10">
                <v-text-field v-model="nombre" label="Ingresa tu nombre"></v-text-field>
            </v-col>

            <v-col cols="10">
                <v-text-field v-model="correo" label="Ingresa tu correo"></v-text-field>
            </v-col>

            <v-col cols="10">
                <v-text-field v-model="password" label="Ingresa tu password" type="Password"></v-text-field>
            </v-col>

            <v-col cols="10">
                <v-text-field v-model="telefono" label="Ingresa tu número telefónico"></v-text-field>
            </v-col>

            <v-col cols="10">
                <v-btn :to="{
                    name: 'recibeparametro',
                    params: {
                        nombre,
                        correo,
                        password,
                        telefono
                    }
                }" color="primary">
                    Siguiente
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'FormView',
  data() {
    return {
      nombre: '',
      correo: '',
      password: '',
      telefono: '',
    }
  },
  methods: {
    goToResultView() {
      this.$router.push({
        name: 'recibeparametro',
        params: {
          nombre: this.nombre,
          correo: this.correo,
          password: this.password,
          telefono: this.telefono,
        },
      });
    },
  },
}
</script>