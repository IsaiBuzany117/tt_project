export const expedienteIvalues = {
    curp: "",
    i: {
        // Ficha de identificacion
        fi: {
            nombre: "",
            apaterno: "",
            amaterno: "",
            edad: "",
            fecnac: "",
            sexo: "",
            edo: "",
            mun: "",
            loc: "",
            tel: "",
            edonac: "",
            edocivil: "",
            escolaridad: "",
            ocupacion: "",
            religion: "",
            claseSE: "",
            famA: "",
            sangre: "",
        },
        //Antecedentes heredo-familiares
        ahf: [
            {
                familiar: "",
                parentesco: "",
                antecedentes: "",
            },
        ],
        //Antecedentes Personales Patologicos
        app: {
            congenitas: {
                patologias: [],
                otro: "",
                consideraciones: "",
            },
            propias_infancia: {
                patologias: [],
                otro: "",
                consideraciones: "",
            },
            quirurgicos: "",
            intoxicaciones: "",
            traumatico: "",
            hospitalizaciones: "",
            alergico: "",
            transfucionales: "",
            otro: "",
        },
        //Antecedentes Personales Patologicos
        apnp: {
            toxicomania: {
                tabaco: {
                    "?": "",
                    cigdiarios: "",
                    añosfumando: "",
                    indice: "",
                },
                alcoholismo: {
                    "?": "",
                    frecuencia: "",
                },
                otro: "",
            },
            higiene: "",
            ejercicio: "",
            habitacion: "",
            alimentacion: {
                verdyfrut: "",
                cereales: "",
                leguminosas: "",
                alimentosanimal: "",
                bebida: "",
                recuento24h: "",
            },
            inmunizaciones: {
                ultivacuna: "",
                esquemavacuna: "",
            },
            sueño: "",
            hobbies: "",
            otros: "",
        },
        //Padecimiento actual
        pa: {
            edoactual: "",
            inicio: "",
            sintomatologia: "",
            evolucion: "",
            factores: "",
        },
        //Interrogatorio por aparatos y sistemas
        ipays: {
            sintgenerales: "",
            ojos: "",
            oidos: "",
            naris: "",
            garaganta: "",
            gusto: "",
            cardiores: "",
            vascular: "",
            urinario: "",
            genital: "",
            digestivo: "",
            hemolinfatico: "",
            endocrino: "",
            nervioso: "",
            psiquiatrico: "",
            musculoesqueletico: "",
            especiales: "",
        },
    },
    // Exploracion fisica
    ef: {
        aspectogeneral: "",
        sv: {
            temperatura: "",
            tensionarterial: "",
            frecresp: "",
            freccardi: "",
            satuoxigeno: "",
            otro: "",
        },
        somatometría: {
            peso: "",
            talla: "",
            imc: "",
        },
        cabeza: "",
        cuello: "",
        torax: "",
        abdomen: "",
        extremidades: "",
        genitales: "",
        exploracionesespeciales: "",
    },
    // Notas de evolucion
    ne: {
        aux: {
            fecha: new Date(Date.now()).toLocaleDateString(),
            sv: {
                temperatura: "",
                tensionarterial: "",
                frecresp: "",
                freccardi: "",
                satuoxigeno: "",
                otro: "",
            },
            eyadcc: "",
            sintomatologia: "",
            dyp: "",
            rrdes: "",
        },
        nota: []
    },
    // Notas de intreconsulta
    ni: {
        aux: {
            fecha: new Date(Date.now()).toLocaleDateString(),
            cyd: "",
            pde: "",
            sdyt: "",
        },
        nota: []
    },
};
