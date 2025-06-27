<a name="readme-top"></a>

# Mi Portfolio Personal - Joshua Elizondo

![Portfolio Personal](/.github/images/img_main.png "Portfolio Personal")

[![GitHub license](https://flat.badgen.net/github/license/JoshuaEA54/portfolio?icon=github&color=black&scale=1.01)](https://github.com/JoshuaEA54/portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/JoshuaEA54/portfolio/commits/main "Maintenance")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Tabla de Contenidos

</summary>

- [Estructura de Carpetas](#bangbang-estructura-de-carpetas)
- [Empezar](#toolbox-empezar)
- [Capturas de Pantalla](#camera-capturas-de-pantalla)
- [Stack Tecnológico](#gear-stack-tecnológico)
- [Créditos](#gem-créditos)
- [Aprende Más](#books-aprende-más)
- [Desplegar en Vercel](#page_with_curl-desplegar-en-vercel)

</details>

## :bangbang: Estructura de Carpetas

Aquí está la estructura de carpetas de mi Portfolio.

```bash
portfolio/
  |- public/
  |- app/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
  |- components/
    |-- about.tsx
    |-- contact.tsx
    |-- experience.tsx
    |-- footer.tsx
    |-- header.tsx
    |-- index.ts
    |-- intro.tsx
    |-- projects.tsx
    |-- section-divider.tsx
    |-- section-heading.tsx
    |-- skills.tsx
    |-- theme-switch.tsx
  |- constants/
    |-- index.ts
  |- context/
    |-- active-section-context.tsx
    |-- theme-context.tsx
  |- lib/
    |-- hooks.ts
    |-- types.ts
  |- public/
    |-- icons/
  |- .env.example
  |- .env.local
  |- .eslintrc.json
  |- .gitignore
  |- environment.d.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.json
```

<br />

## :toolbox: Empezar

1. Asegúrate de que **Git** y **NodeJS** estén instalados.
2. Clona este repositorio en tu computadora local.
3. Crea un archivo `.env.local` en la carpeta raíz.
4. Contenido de `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# email.js id and key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX

# google verification key (optional) - used for domain verification
NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

5. Crea una nueva cuenta en [EmailJS](https://www.emailjs.com/ "EmailJS").

6. Desde el dashboard, elige Email Services > Add New Service y conecta tu correo a emailjs.

7. Una vez configurado el nuevo servicio, copia tu **Service ID** a `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.

8. Ahora, ve a Email Templates > Create New Template para crear tu plantilla de correo. Una vez hecho, puedes copiar el **Template ID** a `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.

9. Para obtener tu **Public Key**, haz clic en tu nombre de usuario en la barra de navegación y ve a configuración de cuenta > Copia Public Key a `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

10. Abre la terminal en el directorio raíz. Ejecuta `npm install` o `bun install`.

11. Ahora la aplicación está completamente configurada :+1: y puedes comenzar a usar esta aplicación usando `npm run dev` o `bun dev`.

**NOTA:** Asegúrate de no compartir estas claves públicamente.

## :camera: Capturas de Pantalla:

![Interfaz Moderna con Tailwind CSS](/.github/images/img1.png "Interfaz Moderna con Tailwind CSS")

![Showcase de Proyectos](/.github/images/img2.png "Showcase de Proyectos")

![Experiencias Profesionales](/.github/images/img3.png "Experiencias Profesionales")

![Formulario de Contacto Funcional](/.github/images/img4.png "Formulario de Contacto Funcional")

## :gear: Stack Tecnológico

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :gem: Créditos

### Autor Original
Este portfolio está basado en el excelente trabajo de **[Sanidhya Kumar Verma](https://github.com/sanidhyy)**.

- **Repositorio Original**: [sanidhyy/portfolio](https://github.com/sanidhyy/portfolio)
- **Autor**: Sanidhya Kumar Verma
- **Licencia**: MIT

### Librerías y Recursos Útiles

- [Email JS](https://www.emailjs.com/ "Email JS")
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [React Icons](https://react-icons.github.io/react-icons/ "React Icons")
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component "React Vertical Timeline Component")
- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast "React Hot Toast")
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer "React Intersection Observer")
- [Next PWA](https://www.npmjs.com/package/next-pwa "Next PWA")

## :books: Aprende Más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes revisar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## :page_with_curl: Desplegar en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.

---

**Nota**: Si utilizas esta plantilla, por favor mantén los créditos al autor original según la licencia MIT.

<br />
<p align="right">(<a href="#readme-top">volver arriba</a>)</p>
