const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/miscomics",
  "title": "Mis cómics",
  "subtitle": "Una colección de cómics y fanzines",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "autores",
        "label": "Autores",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "País",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autores",
      "fecha",
      "ciudad"
    ]
  }
};
export default config;