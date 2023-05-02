export const validation = (form) => {
  const errors = {};
  if (form.name.length < 3){
    errors.name = "El nombre debe tener al menos 3 caracteres"
  }

  if (!form.image){
    errors.image = "El campo no debe estar vacío"
  }

  if (form.hp < 0 || form.hp > 100){
    errors.hp = " debe estar en el rango de 0 a 100"
  }

  if (form.attack < 0 || form.attack > 100){
    errors.attack = " debe estar en el rango de 0 a 100"
  }

  if (form.defense < 0 || form.defense > 100){
    errors.defense = " debe estar en el rango de 0 a 100"
  }

  if (form.speed < 0 || form.speed > 100){
    errors.speed = " debe estar en el rango de 0 a 100"
  }

  if (form.height < 1 || form.height > 100){
    errors.height = " debe estar en el rango de 1 a 100"
  }

  if (form.weight < 1 || form.weight > 100){
    errors.weight = " debe estar en el rango de 1 a 100"
  }

  if (!form.types){
    errors.types = "El campo no debe estar vacío"
  }

  return errors;
};
