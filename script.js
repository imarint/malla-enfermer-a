document.addEventListener("DOMContentLoaded", () => {
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
    // (Puedes continuar pegando los demás semestres aquí)
    // ...
  ];

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
    modalCreditos.textContent = asignatura.creditos ?? "No especificado";
    modalRequisitos.textContent = asignatura.requisitos ?? "Ninguno";
    modal.classList.remove("hidden");
  }

  function cerrarModal() {
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", cerrarModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
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
      const claseFormacion = formacionClases[asig.formacion] || "";
      if (claseFormacion) divAsig.classList.add(claseFormacion);
      divAsig.textContent = asig.nombre;
      divAsig.addEventListener("click", () => mostrarModal(asig));
      divAsignaturas.appendChild(divAsig);
    });

    section.appendChild(divAsignaturas);
    main.appendChild(section);
  });
});
