
export class App {

  configureRouter(config, router){
    
    this.router = router;
    
    config.map([
      { route: "", moduleId: "/src/routes/home", title: "Home", nav: true, name:"home", settings:{glyph: "glyphicon glyphicon-home glyphicon-margin" }},
      { route: "search", moduleId: "/src/routes/search", title: "Search", nav: true, name:"search", settings:{glyph: "glyphicon glyphicon-search glyphicon-margin" }},
      { route: "help", moduleId: "/src/routes/help", title: "Help", nav: true, settings:{glyph: "glyphicon glyphicon-question-sign glyphicon-margin" }},
      { route: "list", moduleId: "/src/routes/list", name: "list" },
      { route: "list-exhibitions", moduleId: "/src/routes/list-exhibitions", name: "list-exhibitions" },
      { route: "detail/:id",  moduleId: "/src/routes/detail", name:"detail" }
    ]);
    
  }

}