import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    
    config.title = 'Football Squad';
    
    config.map([
      { route: '', moduleId: 'app', title: 'Homepage' },
      { route: 'edit/:id', moduleId: 'edit-player', name: 'edit'  }
    ]);

    this.router = router;
  }
}