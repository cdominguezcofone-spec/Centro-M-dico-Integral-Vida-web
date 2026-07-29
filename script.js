document.addEventListener('DOMContentLoaded', () => {
    const formTurno = document.getElementById('formTurno');
    
    if (formTurno) {
        formTurno.addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar los valores del formulario de turnos
            const datosTurno = {
                tipo: "turno",
                especialista: document.getElementById('especialista').value,
                fechaTurno: document.getElementById('fechaTurno').value,
                horario: document.getElementById('horario').value,
                paciente: document.getElementById('nombrePaciente').value,
                correo: document.getElementById('correoPaciente').value,
                obraSocial: document.getElementById('obraSocial').value
            };

            // Reemplaza "TU_URL_DE_APPS_SCRIPT" con la URL real de tu Web App de Google Apps Script
            const urlAPI = "https://script.google.com/macros/s/TU_URL_DE_APPS_SCRIPT/exec";

            // Enviar datos mediante Fetch hacia la API
            fetch(urlAPI, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosTurno)
            })
            .then(() => {
                alert("¡Turno reservado con éxito! Los datos han sido registrados en el sistema.");
                formTurno.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Hubo un error al registrar el turno. Inténtalo nuevamente.");
            });
        });
    }
});
