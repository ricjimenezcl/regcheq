import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any; // Puedes cambiar `any` por un tipo más específico si lo necesitas
  }
}
