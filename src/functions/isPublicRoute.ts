import { APP_ROUTES } from "@/constants/app-router";


export function isPublicRoute(asPath: string) {
  const puiblicRoutes = APP_ROUTES.public

  return puiblicRoutes.includes(asPath)
}