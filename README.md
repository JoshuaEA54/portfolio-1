<a name="readme-top"></a>

# My Personal Portfolio - Joshua Elizondo

![Personal Portfolio](/.github/images/img_main.png "Personal Portfolio")

[![GitHub license](https://flat.badgen.net/github/license/JoshuaEA54/portfolio?icon=github&color=black&scale=1.01)](https://github.com/JoshuaEA54/portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/JoshuaEA54/portfolio/commits/main "Maintenance")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Credits](#gem-credits)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)

</details>

## :bangbang: Folder Structure

Here is the folder structure of my Portfolio.

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

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** are installed.
2. Clone this repository to your local computer.
3. Create a `.env.local` file in the root folder.
4. Contents of `.env.local`:

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

5. Create a new account at [EmailJS](https://www.emailjs.com/ "EmailJS").

6. From the dashboard, choose Email Services > Add New Service and connect your email to emailjs.

7. Once the new service is configured, copy your **Service ID** to `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.

8. Now, go to Email Templates > Create New Template to create your email template. Once done, you can copy the **Template ID** to `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.

9. To get your **Public Key**, click on your username in the navigation bar and go to account settings > Copy Public Key to `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

10. Open the terminal in the root directory. Run `npm install` or `bun install`.

11. Now the application is fully configured :+1: and you can start using this application using `npm run dev` or `bun dev`.

**NOTE:** Make sure not to share these keys publicly.

## :camera: Screenshots:

![Modern Interface with Tailwind CSS](/.github/images/img1.png "Modern Interface with Tailwind CSS")

![Projects Showcase](/.github/images/img2.png "Projects Showcase")

![Professional Experiences](/.github/images/img3.png "Professional Experiences")

![Functional Contact Form](/.github/images/img4.png "Functional Contact Form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :gem: Credits

### Original Author
This portfolio is based on the excellent work of **[Sanidhya Kumar Verma](https://github.com/sanidhyy)**.

- **Original Repository**: [sanidhyy/portfolio](https://github.com/sanidhyy/portfolio)
- **Author**: Sanidhya Kumar Verma
- **License**: MIT

### Useful Libraries and Resources

- [Email JS](https://www.emailjs.com/ "Email JS")
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [React Icons](https://react-icons.github.io/react-icons/ "React Icons")
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component "React Vertical Timeline Component")
- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast "React Hot Toast")
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer "React Intersection Observer")
- [Next PWA](https://www.npmjs.com/package/next-pwa "Next PWA")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

**Note**: If you use this template, please keep the credits to the original author according to the MIT license.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
