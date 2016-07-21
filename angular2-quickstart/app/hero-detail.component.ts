import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
})
export class HeroDetailComponent implements  OnInit, OnDestroy {
    sub: any;
    hero: Hero;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        let id = +params['id'];
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }
    
    goBack() {
        window.history.back();
    }
}