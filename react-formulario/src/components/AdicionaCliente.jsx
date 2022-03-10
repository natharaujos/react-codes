import React from "react";
import { Formik, Field, useField } from "formik";
import * as yup from "yup";

const Campo = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "is-invalid" : null}
      />
      {meta.error && meta.touched ? (
        <small className="invalid">{meta.error}</small>
      ) : null}
    </div>
  );
};

const AdicionaCliente = () => {
  const schema = yup.object({
    nome: yup
      .string()
      .required("O nome é obrigatório")
      .min(10, "O nome deve conter no mínimo 10 caracteres")
      .max(30, "O nome deve conter no máximo 30 caracteres"),
    email: yup.string().required("O email é obrigatório"),
    nascimento: yup.date().required("A data de nascimento é obrigatório"),
  });
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{ nome: "", email: "", nascimento: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <div className="form-group">
              <Campo id="nome" name="nome" type="text" label="Nome" />
            </div>
            <div className="form-group">
              <Campo id="email" name="email" type="email" label="Email" />
            </div>
            <div className="form-group">
              <Campo
                id="nascimento"
                name="nascimento"
                type="date"
                label="Data de Nascimento"
              />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
