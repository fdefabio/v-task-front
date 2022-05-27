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
  nota:              string;
  pregunta:          Pregunta[];
  comentarioDocente: string;
  idDocente:         null | string;
  grupo:             string;
}

interface Pregunta {
  pregunta:  string;
  respuesta: null | string;
}
