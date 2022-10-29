const stepList = [
  {
    label: "Creating Next App",
    description: `The first task was to initialize the base project using NextJS, I created the project using 'npm create next-app muishop',
      this way I got a pre-configured base structure.`,
  },
  {
    label: "Installing TypeScript",
    description: `In this process I downloaded the typescript as a development dependency and changed all the files to '.ts', automatically nextjs detected and created 'tsconfig.json', now the project was able to use types.`,
  },
  {
    label: "Installing Material UI",
    description: `I was in doubt about which theme to choose, I always like to test different themes to apply in projects and decide which ones are better, I ended up seeing the 'MUI' or 'Material UI' and I found it totally interesting to use, as soon as I chose I downloaded all the dependencies looking for documentation and other content on how to pre-configure 'MUI' with nextjs.`,
  },
  {
    label: "Stripe Integration",
    description: `In this project I wanted to set up a simple and fast payment system, so I decided to use 'stripe', to be able to create products and already have a payment method.`,
  },
  {
    label: "Back-End API",
    description: `I created some routes for backend control with the 'stripe', collected products and a part that redirects users to the product using the 'stripe' checkout.`,
  },
  {
    label: "Isolates States (Design Pattern)",
    description: `This is a design pattern that I learned thinking about how I could improve my states in react and I came to the conclusion that I needed to isolate the states per file, and send the responsibility to call them only in one, in this way my main component is clean and with only a control state over the component, of course this use of isolated component only applies when you have many states for a single component, this use allows for easier maintenance and makes teamwork easier.`,
  },
  {
    label: "Themes",
    description: `I made sure to create a global state to control the user's theme, so far there are only dark and light which is the most accepted theme default.`,
  },
  {
    label: "Domain Entities",
    description: `I see that in the DDD they create a folder where they isolate all the entities, keeping an organization in the project, I recreated the same process in this project of mine, as this is a simpler project it is not necessary to apply it inversion of dependency.`,
  },
];

export default stepList;
