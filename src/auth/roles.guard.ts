import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private requiredRole: string) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.user.role !== this.requiredRole) {
      throw new ForbiddenException(`Requires ${this.requiredRole} role`);
    }
    return true;
  }
}
