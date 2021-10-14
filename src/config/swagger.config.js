export default {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CEM-backend",
      version: "1.0.0",
      description:
        "The API documentation of College Event Management",
      license: {
        name: "GPL-3.0",
        url: "https://choosealicense.com/licenses/gpl-3.0/",
      },
      contact: {
        name: "GDSC Vssut Burla",
      },
    },
    basePath: "/api",
    servers: [
      {
        url: "http://localhost:5000/api/",
      },
    ],
  },
  tags: [
    {
      name: "User",
      description: "API for user data ",
    },
    {
      name: "HomePage",
      description: "API for homepage data",
    },
  ],
  apis: [
    "src/models/*.js",
    "src/utils/helpers/*.js",
    "src/api/controllers/user/*.js",
    "src/api/controllers/user/edit/*.js",
    "src/api/controllers/user/auth/*.js",
    "src/api/controllers/event/*.js",
    "src/api/controllers/homepage/*.js",
  ],
};
