import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Form = (props) => {
  return (
    <form className="form__management" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Funcionario" variant="outlined" onChange={(e) => props.handleChange(e)} />
      <Button type="submit" onClick={(e) =>props.handleSubmit(e)} variant="contained" color="primary">
        Enviar
      </Button>
      <Button type="submit" onClick={(e) =>props.handleStart(e)} variant="contained" color="primary">
        Iniciar Trabalho
      </Button>
    </form>
  );
}

export default Form