// 2. https://www.typescriptlang.org/play/?#code/PQKgBI6CCAwggsIFjiIIDhAyF4QKYCmA7ArgWzGUCEQQQRAxB+EEAEQQPhBAmEEFYQSwLhBBhEDACh2xJYF0BGAHRhAuCBRyiElCKAZEDBFE5MDEDcIIHkQMNUCMIICkQekyJQANGHhFtgaRAKlZDG1RaK+ikTIUdaoGYQamEDsIGnhnRA1aMABZAE8AUVw8E209AwpqGBIGJFooFRINUk1ACRBELSZqQE4QLh44eHQAJmExCSlZeShWQDkQTS1KKC1qIlZ5RToTM0swUJKUEiJKFiZAMRBXMABnAHcASwAXAGMACzBtgENljBNyFLT6DKyoEjk86kLi4w5uEs84VHowQFEQTMN6ERkupCL5wtFYpwQCBgJxsPhwTEEQBvCoAQTAAF4wAByNE4owVABCWNxRJx7AAvpxgMBKnwwPx2NsAPZYZabMAsgBGACtSajuABtSJIvCCNEAXQAXLjDlgIgBlTYAJ3WWAA5gSKiKIfhBESZXKFcq1ZqahTqTS6dAqrVOKz2ZyAGY4LDbUkACk2EQADhhZaLYgBKLEAPjAgpWGx2u29fowoaj3COJ0RsQl0oq3G4tPkLCBKjavVKYBKMGzOZVGE2OBVWEZYAA1GAAMzNsAANg7AA5K6mMOn9USszmc3miAWwEWS2WUpXuNXa-XGfwO-wNxvKwATDDOw44AA2m1lC7AS7rDdwh8PAG4KtTKUA

/* Задачи на enum и тс проверку 

  Задача 1. Написать тип для объекта, чтобы при добавлении нового значения в MyEnum, объект подсвечивался тс ошибкой
  Задача 2. Написать такую обработку типов, чтобы в конструкции switch case, подсвечивалась тс ошибка, 
  когда не хватает поля из MyEnum

**/

enum MyEnum {
  A = 'A',
  B = 'B',
}

// Задача 1

type Obj = {
  [Key in typeof MyEnum[keyof typeof MyEnum]]: string;
};

const obj: Obj = {
  [MyEnum.A]: 'anyString',
  [MyEnum.B]: 'anyString2',
}


// Задача 2

const func = (type: MyEnum) => {
  switch(type) {
    case MyEnum.A:
      // тут любой код
      return 1 + 3 + 6 + 8
    case MyEnum.B:
      // тут любой код
      return 11 + 11111
    default: 
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
  }
}