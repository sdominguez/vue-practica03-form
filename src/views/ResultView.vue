<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Nombre: {{ nombre }}
                    </v-card-title>
                    <v-card-title>
                        Correo: {{ correo }}
                    </v-card-title>
                    <v-card-title>
                        Teléfono: {{ telefono }}
                    </v-card-title>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-form ref="form" v-model="isFormValid" lazy-validation>
                    <v-text-field v-model="name" :rules="nameRules" label="Nombre" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="Correo" required></v-text-field>

                    <v-text-field v-model="phone" :rules="phoneRules" label="Teléfono" required></v-text-field>

                    <v-text-field v-model="contrasenia" :rules="passwordRules" label="Contraseña" type="Password"
                        required></v-text-field>

                    <v-btn color="success" @click="submitForm">
                        Enviar
                    </v-btn>
                    <v-btn class="ml-4" color="warning" @click="resetForm">
                        Reset
                    </v-btn>
                </v-form>
            </v-col>



        </v-row>
    </v-container>
</template>


<script>
export default {
    name: 'ResultView',
    props: {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },

    },
    data() {
        return {
            isFormValid: false,
            name: this.nombre,
            email: this.correo,
            contrasenia: this.password,
            phone: this.telefono,
            nameRules: [
                v => !!v || 'Nombre es requerido',
                v => (v && v.length <= 10) || 'El nombre no debe ser menor a 10 caracteres',
            ],
            emailRules: [
                v => !!v || 'Correo es requerido',
                v => /.+@.+\..+/.test(v) || 'El correo debe ser valido',
            ],
            passwordRules: [
                v => !!v || 'Contraseña es requerido',
                v => (v && v.length >= 6) || 'La contraseña no debe ser menor a 6 caracteres',
            ],
            phoneRules: [
                v => !!v || 'Teléfono es requerido',
                v => (/^\d+$/.test(v) && v.length === 10) || 'El teléfono debe contener solo dígitos y tener 10 caracteres',
            ],
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                // Form is valid, submit the data
                //alert('Formulario Enviado!');
                this.$swal({
                    icon: "success",
                    title: "Información enviada correctamente",
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                this.$swal({
                    icon: "error",
                    title: "Oops...",
                    text: "Revisa los campos del formulario",
                })
            }
        },
        resetForm() {
            this.$refs.form.reset();
            this.name = '';
            this.email = '';
            // eslint-disable-next-line vue/no-mutating-props
            this.contrasenia = '';
        },
    },
}
</script>