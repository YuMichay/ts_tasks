/* Напиши тайпгард чтобы тс автоматически понимал какой тип использовать **/

interface TypeA {
  a: number
  c: string
}

interface TypeB {
  a: string
  d: number
}

const isTypeA = (type: TypeA | TypeB): type is TypeA => {
  return (type as TypeA).c !== undefined;
}

const func = (type: TypeA | TypeB): any => {
  if (!isTypeA(type)) {
    return (type as TypeB).d
  } else {
    return (type as TypeA).c
  }
}