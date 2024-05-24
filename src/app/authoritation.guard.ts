import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export function authorizationGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // Add your authorization logic here
  return false; // Replace this with your authorization logic
}
