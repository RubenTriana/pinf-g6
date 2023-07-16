import React, { useState, useEffect } from "react";
import formIma from "../../assets/formulario.webp";
import "./form2.css";
import axios from 'axios';
axios.defaults.withCredentials = true;

export const Form2 = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    correo: null,
    telefono: null,
    mensaje: null,
  });

  const validateForm = () => {
    const newErrors = {};
    newErrors.nombre = formState.nombre.length > 35 ? "Debe tener 35 caracteres o menos" : null;
    newErrors.correo = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formState.correo) ? "email incorrecto" : null;
    newErrors.telefono = !(Number.isInteger(+formState.telefono) && +formState.telefono > 0) ? "El número de teléfono es requerido" : null;
    newErrors.mensaje = !formState.mensaje ? "El comentario es requerido" : null;
    setErrors(newErrors);
    return !(newErrors.nombre || newErrors.correo || newErrors.telefono || newErrors.mensaje);
  };

  const handleInputChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('https://back-app-production.up.railway.app/api/registrapersona', formState)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  };

  useEffect(() => {
    validateForm();
  }, [formState]);

  return (
    // ... (Aquí va tu código de renderizado)
    <div className='contact container-fluid contentForm pt-5 mt-5 pb-5 '>
      {/* ... (más de tu código de renderizado) */}
      <form className="formulary w-100" onSubmit={handleSubmit}>
        {/* ... (más de tu código de renderizado) */}
        <input
          type="text"
          className=" form-control shadow-none  "
          id="nameForm"
          name="nombre"
          autoComplete="off"
          onChange={handleInputChange}
        />
        {/* ... (más de tu código de renderizado) */}
        <input
          type="email"
          className="form-control shadow-none"
          id="emailForm"
          name="correo"
          aria-describedby="emailHelp"
          autoComplete="off"
          onChange={handleInputChange}
        />
        {/* ... (más de tu código de renderizado) */}
        <input
          type="number"
          className="form-control shadow-none"
          id="telForm"
          name="telefono"
          autoComplete="off"
          onChange={handleInputChange}
        />
        {/* ... (más de tu código de renderizado) */}
        <textarea
          type="text"
          className="form-control shadow-none"
          id="messageForm"
          name="mensaje"
          rows={3}
          autoComplete="off"
          onChange={handleInputChange}
        />
        {/* ... (más de tu código de renderizado) */}
      </form>
      {/* ... (más de tu código de renderizado) */}
    </div>
    // ... (Aquí va tu código de renderizado)
  );
};
