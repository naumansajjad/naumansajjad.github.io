# Nauman Sajjad Portfolio

**Web-based Simulation of Ubuntu OS | Built with Next.js & Tailwind CSS**

This is a personal portfolio website by **Nauman Sajjad**, designed to replicate the look and feel of **Ubuntu 20.04** in the browser. It provides an interactive and unique way to showcase my projects, skills, and experience.

## 🚀 Live Demo

Check out the live site here: [**naumansajjad.vercel.app**](https://naumansajjad.vercel.app/)

## 📦 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/naumansajjad/naumansajjad.github.io.git

# Navigate to the project folder
cd naumansajjad.github.io

# Install dependencies
npm install
```

### Running the Project

#### Development Mode

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. The app reloads automatically as you edit.

#### Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` folder, ready for deployment.

---

## 📧 Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages.

1. Create an EmailJS account.
2. Add a new email service (Gmail, Outlook, etc.) and a new template.
3. Get your **Service ID**, **Template ID**, and **User ID**.
4. Create a `.env` file in the root of your project with the following:

```env
NEXT_PUBLIC_USER_ID='YOUR_USER_ID'
NEXT_PUBLIC_TEMPLATE_ID='template_fqqqb9g'
NEXT_PUBLIC_SERVICE_ID='YOUR_SERVICE_ID'
```

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create a branch:

```bash
git checkout -b feature/NewFeature
```

3. Commit changes:

```bash
git commit -m 'Add new feature'
```

4. Push to branch:

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**Author:** Nauman Sajjad
**GitHub:** [naumansajjad](https://github.com/naumansajjad)
