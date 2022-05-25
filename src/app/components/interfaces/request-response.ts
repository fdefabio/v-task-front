export interface Response{
  id:       string;
  nombre:   null | string;
  apellido: string;
  grupo:    string;
  img:      null;
  is_admin: boolean;
}

export interface Examen {
  id:                string;
  titulo:            string;
  fechaPresentacion: Date | null;
  nota:              string;
  pregunta:          Pregunta[];
  comentarioAlumno:  string;
  comentarioDocente: string;
  idDocente:         null | string;
  idEstudiante:      null | string;
  grupo:             string;
}

interface Pregunta {
  pregunta:  string;
  respuesta: null | string;
}
