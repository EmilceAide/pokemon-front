export const validation = (form) => {
  const errors = {};
  if (form.name.length < 3){
    errors.name = "El nombre debe tener al menos 3 caracteres"
  }
  if(!/^(http|https)+:\/\/+[a-z0-9.]+\/(.*)/.test(form.image)){
    errors.image = "El formato requerido debe iniciar con http o https"
  }
  if(form.image === "" ){
    errors.image = "El campo no puede estar vacío"
  }

  if (form.hp < 1 || form.hp > 100){
    errors.hp = "Debe estar en el rango de 1 a 100"
  }

  if (form.attack < 1 || form.attack > 100){
    errors.attack = " Debe estar en el rango de 1 a 100"
  }

  if (form.defense < 1 || form.defense > 100){
    errors.defense = " Debe estar en el rango de 1 a 100"
  }

  if (form.speed < 0 || form.speed > 100){
    errors.speed = " Debe estar en el rango de 0 a 100"
  }

  if (form.height < 0 || form.height > 100){
    errors.height = "Debe estar en el rango de 0 a 100"
  }

  if (form.weight < 0 || form.weight > 100){
    errors.weight = "Debe estar en el rango de 0 a 100"
  }

  if (form.types.length === 0){
    errors.types = "Debe selecionar al menos dos tipos"
  }
  if(form.types.length === 1){
    errors.types = "Debe selecionar al menos dos tipos"
  }

  return errors;
};
