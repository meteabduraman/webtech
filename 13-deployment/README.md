## Deploying your application

The process of deployment involves moving your _build_ to a real server so that it can be accessed by users. We use our local machines only for developing purposes; your application should live and run on a machine that's exposed to the internet bi-directionally (outbound and inbound internet traffic).

The timing of this process in the development context is also an important aspect, and CI/CD practices (Continuous Integration/Continuous Delivery) find a good place for this step to fit in the development workflow.

Truth is, if your application is not deployed, nobody could use it other than people who clone and set up your repository, so it is a critical aspect. In some companies, there are entire teams dedicated to coming up with a deployment strategy or even handling it. Often this task falls under the **operations** roles (DevOps).

### Deployment solutions

Two main solutions for deployments:
- **unmanaged**: what you'll need basically is a server in a datacenter to port your code to, more precisely either a physical machine or, more often, a virtual machine running on one of the physical machines in the data center; this is what you will get, and it will be completely up to you to port your _build_ there, handle the security of that transport, monitor the resources on the machine, and so on.
- **managed**: with these types of solution you externalize everything to a third party, which takes care of all aspects of the deployment process, and at the end you will get your app live, but have little to no control of the machine it runs on; these solutions are also highly monetized; they often rely on unmanaged deployment solutions which also have a cost they need to clear.

Examples of unmanaged deployment solutions: [Azure](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode), [AWS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html).

Examples of managed deployment solutions: [Netlify](https://docs.netlify.com/frameworks/vite/), [Vercel](https://vercel.com/docs/frameworks/vite), [Render](https://render.com/docs/deploy-create-react-app).

Bear in mind that managed deployment solutions providers may often change their pricing, and it often happens that a free tier is no longer available with some. You need to constantly be on the lookout for new providers and consult their pricing strategies. Also bear in mind that most managed deployment solutions require you use a certain tech stack, e.g. they won't support React or Vue, or even Javascript/Node.js altogether.

The steps you perform in order to deploy an app often depend on the provider you chose, but most will ask you for more or less similar input. In order to succeed, it's a matter of consulting their documentation and making sure you comply to everything there.

### Different components of the same product

Almost the entire semester we talked about backend and frontend, these are 2 components of the same system. Although they may share certain aspects, they are two distinct applications (at least in our examples of a React frontend and an Express JS backend).

Given this, we need to handle their deployment separately. Some managed solutions are more fitted for frontends (such as Vercel), while others are more fitted for backends (such as Render).

Another aspect that a backend may need to address is the database. Some solutions allow you to also request a database, or you can use another third party to deploy it on your own ([5 ways to host MySQL databases from Prisma](https://www.prisma.io/dataguide/mysql/5-ways-to-host-mysql)), but certainly, your database will also need to be available for your deployed backend to use it.

### In the lab

We dicussed about deployments in general and then tried to deploy a frontend and a backend. We created 2 simple apps:
- a Node.js Express app which had a single GET endpoint that responded with `{hello: 'hello'}`
- a React app which called this endpoint and showed the response in the browser

For the Node.js Express app, we used a Render (provider) Web Service, while for the React app we used Netlify (we couldn't get it to work, but hey, we tried 🫡).
