// 4. https://www.typescriptlang.org/play/?#code/PQKgBI6CCAwggsIFjiIFMheECYfhBB8IMwHCCB4QKOgrCBgCWAdgGYCmATgHRiCoIMcoMIggbCDIZiACIIYBIg2QEIggGRAweQsi5h4hPoHYQUpVoAoFWA1hARCCFAjCDE4yMEOxoANGEDMIDGKFAgiCiwMdpLnZAXCBgAKhfcYhGDyA0iCAnCBggPIggEwggNwg4YRCduFgaDwYuNh2aXTqmjr6KBzSqGgZUI4maGCRGPKRPFCAkiBQhLgYYYAiIKzI7oBiINjYYH4BwWG6rDZCxlDueABcORqMdtEDkU4uyG6eFWC6QdHJcoSGYAAKNAD2ALYkAM5UADxkAK5XAEa0AHwWAVU1dY1mrhQsZTLtxvEwAAXGjPKgWbCoWRgCgAQwANvd1CBgGooQBPAAOVDAADFnmQAMZeImPLxgKgADyhVDIABNbmdLjd7k9Xh8aGAAD5gW4w8gAc2FYDeFwu6KoqLI0tu+Pe8s+nzAAF4wAAKQncu5UWbeACUOq1WkASCCAPBBAJgg2kAGCCAfBA8bTvFQxQBGHVkinU2kPc7XY1895fT4qAnEz1igBMfvJVJpxODRt5Ypoks1QA

/* Задача на понимание infer. Ее нужно решить именно через infer

  Тебе дан тип, где есть дженерик T, который является промисом.
  Тебе нужно написать тип возвращаемой функции который будет таким:
  Если в дженерик тип был передан Promise<number>, то возвращаемый тип будет true, иначе false
*/

type FuncType<T extends Promise<number | string | boolean | symbol>> = (promise: T) => T extends Promise<infer U> ? (U extends number ? true : false) : never;

type Test1 = FuncType<Promise<number>>
type Test2 = FuncType<Promise<string>>