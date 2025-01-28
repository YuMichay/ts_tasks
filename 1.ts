// 1. Напиши ТС тип который будет ключи делать из snake_case в camelCase

type SnakeCaseObject = {
  first_name: string;
  last_name: string;
  user_info: {
    email_address: string;
    phone_number: string;
  };
};

type CapitalizeWords<S extends string> = S extends `${infer unCap}_${infer Cap}` ? `${unCap}${Capitalize<CapitalizeWords<Cap>>}` : S;

type ConvertToCamelCase<T> = {
  [Key in keyof T as CapitalizeWords<string & Key>]: T[Key] extends object ? ConvertToCamelCase<T[Key]> : T[Key];
}

type CamelCasedObject = ConvertToCamelCase<SnakeCaseObject>;