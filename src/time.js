const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

const fechaCompleta = () => {
    const ahora = new Date();
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    return ahora.toLocaleString('es-ES', opciones);
};

const hora = () => {
    const ahora = new Date();
    const opciones = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    return ahora.toLocaleString('es-ES', opciones);
};

export default { fechaCompleta, hora };