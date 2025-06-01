// Array para almacenar las notas
let notas = [];

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    document.getElementById('error').textContent = mensaje;
    setTimeout(() => {
        document.getElementById('error').textContent = '';
    }, 3000);
}

// Función para agregar una nota
function agregarNota() {
    const input = document.getElementById('notaInput');
    const valor = parseFloat(input.value);
    
    // Validaciones
    if (isNaN(valor)) {
        mostrarError('Por favor ingrese un número válido');
        return;
    }
    
    if (valor < 0 || valor > 10) {
        mostrarError('La nota debe estar entre 0 y 10');
        return;
    }
    
    // Agregar nota al array
    notas.push(valor);
    
    // Actualizar la lista visual
    actualizarListaNotas();
    
    // Limpiar el input
    input.value = '';
    
    // Ocultar resultado anterior
    document.getElementById('resultado').style.display = 'none';
}

// Función para actualizar la lista visual de notas
function actualizarListaNotas() {
    const lista = document.getElementById('notasLista');
    
    if (notas.length === 0) {
        lista.innerHTML = '<div style="color: #999; text-align: center; font-style: italic;">No hay notas ingresadas</div>';
        return;
    }
    
    let html = '';
    notas.forEach((nota, index) => {
        html += `<div class="nota-item">Nota: ${nota}</div>`;
    });
    
    lista.innerHTML = html;
}

// Función para calcular el promedio
function calcularPromedio() {
    if (notas.length === 0) {
        mostrarError('Debe agregar al menos una nota antes de calcular el promedio');
        return;
    }
    
    // Calcular promedio
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = suma / notas.length;
    
    // Determinar estado
    const aprobado = promedio >= 7;
    const estado = aprobado ? 'Aprobado' : 'Reprobado';
    const claseEstado = aprobado ? 'estado-aprobado' : 'estado-reprobado';
    
    // Mostrar resultado
    document.getElementById('promedioTexto').textContent = `Promedio: ${promedio.toFixed(2)}`;
    const estadoElement = document.getElementById('estadoTexto');
    estadoElement.textContent = `${estado}`;
    estadoElement.className = claseEstado;
    
    document.getElementById('resultado').style.display = 'block';
}

// Función para limpiar todas las notas
function limpiarNotas() {
    notas = [];
    actualizarListaNotas();
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('notaInput').value = '';
    document.getElementById('error').textContent = '';
}


