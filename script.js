const malla = [
  {
    semestre: 1,
    asignaturas: [
      { nombre: "Morfología Básica", creditos: 5, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Química General y Orgánica", creditos: 7, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Biología Celular", creditos: 5, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Bases de la Enfermería y su Rol en el Liderazgo", creditos: 5, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Psicología Evolutiva", creditos: 5, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Antropología", creditos: 3, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 2,
    asignaturas: [
      { nombre: "Integrado Fisiología-Fisiopatología I", creditos: null, requisitos: "Morfología Básica", formacion: "disciplinar" },
      { nombre: "Bioquímica General", creditos: null, requisitos: "Química General y Orgánica", formacion: "disciplinar" },
      { nombre: "Microbiología General", creditos: null, requisitos: "Biología Celular", formacion: "disciplinar" },
      { nombre: "Salud Digital", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Salud Intercultural", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Calidad, Seguridad y Prevención de Infecciones Asociadas a la Atención en Salud (IAAS)", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
    ],
  },
  {
    semestre: 3,
    asignaturas: [
      { nombre: "Integrado Fisiología-Fisiopatología II", creditos: null, requisitos: "Integrado Fisiología-Fisiopatología I", formacion: "disciplinar" },
      { nombre: "Farmacología General", creditos: null, requisitos: "Integrado Fisiología-Fisiopatología I", formacion: "disciplinar" },
      { nombre: "Salud Poblacional", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Enfermería en el Curso de Vida", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Educación para la Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Comunicación Interdisciplinar", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
    ],
  },
  {
    semestre: 4,
    asignaturas: [
      { nombre: "Administración para la Gestión del Cuidado", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Gestión del Cuidado del Adulto I", creditos: null, requisitos: "Enfermería en el Curso de Vida", formacion: "profesional" },
      { nombre: "Bases de Práctica Basada en Evidencia", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Ética", creditos: null, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 5,
    asignaturas: [
      { nombre: "Epidemiología", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Bioestadística y Salud", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Gestión de Proyectos en Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Gestión del Cuidado del Adulto II", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Medio Ambiente, Salud y Enfermería", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Persona y Sociedad", creditos: null, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 6,
    asignaturas: [
      { nombre: "Metodología de la Investigación", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Liderazgo y Toma de Decisiones en Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Gestión del Cuidado en la Persona Mayor", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Enfermería en Salud Mental y Psiquiatría", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Electivo I: Formación e Identidad", creditos: null, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 7,
    asignaturas: [
      { nombre: "Bioética", creditos: null, requisitos: "Ninguno", formacion: "disciplinar" },
      { nombre: "Gerencia y Gobernanza para la Gestión en Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Gestión del Cuidado en la Niñez y Adolescencia", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Enfermería en Salud Familiar y Comunitaria", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Proyecto de Investigación", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Electivo II: Formación e Identidad", creditos: null, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 8,
    asignaturas: [
      { nombre: "Liderazgo para la Gestión del Cambio en Equipos de Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Enfermería en Oncología y Cuidados Paliativos", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Enfermería de Urgencia", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Práctica Basada en la Evidencia", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Electivo III: Formación e Identidad", creditos: null, requisitos: "Ninguno", formacion: "identidad" },
    ],
  },
  {
    semestre: 9,
    asignaturas: [
      { nombre: "Internado Clínico Asistencial", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Electivo I", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Gestión de Carrera y Desarrollo Profesional", creditos: null, requisitos: "Ninguno", formacion: "empleabilidad" },
    ],
  },
  {
    semestre: 10,
    asignaturas: [
      { nombre: "Internado Salud Familiar y Comunitaria", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Internado Gestión en Salud", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
      { nombre: "Electivo II", creditos: null, requisitos: "Ninguno", formacion: "profesional" },
    ],
  },
];

// Clases CSS según tipo formación
const formacionClases = {
  disciplinar: "formacion-disciplinar",
  profesional: "formacion-profesional",
  identidad: "formacion-identidad",
  empleabilidad: "formacion-empleabilidad",
};

const main = document.getElementById("malla");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalCreditos = document.getElementById("modal-creditos");
const modalRequisitos = document.getElementById("modal-requisitos");
const closeBtn = document.getElementById("close-btn");

function mostrarModal(asignatura) {
  modalTitle.textContent = asignatura.nombre;
  modalCreditos.textContent = asignatura.creditos ? asignatura.creditos : "No especificado";
  modalRequisitos.textContent = asignatura.requisitos ? asignatura.requisitos : "Ninguno";
  modal.classList.remove("hidden");
}

function cerrarModal() {
  modal.classList.add("hidden");
}

closeBtn.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});

malla.forEach((semestre) => {
  const section = document.createElement("section");
  section.classList.add("semestre");

  const h2 = document.createElement("h2");
  h2.textContent = `Semestre ${semestre.semestre}`;
  section.appendChild(h2);

  const divAsignaturas = document.createElement("div");
  divAsignaturas.classList.add("asignaturas");

  semestre.asignaturas.forEach((asig) => {
    const divAsig = document.createElement("div");
    divAsig.classList.add("asignatura");
    // Clase color según formación
    const claseFormacion = formacionClases[asig.formacion] || "";
    if (claseFormacion) divAsig.classList.add(claseFormacion);
    divAsig.textContent = asig.nombre;
    divAsig.addEventListener("click", () => mostrarModal(asig));
    divAsignaturas.appendChild(divAsig);
  });

  section.appendChild(divAsignaturas);
  main.appendChild(section);
});

