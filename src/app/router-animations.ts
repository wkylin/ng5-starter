import {trigger, state, transition, animate, style, query, group} from '@angular/animations';

export const RouterAnimation = trigger('routeAnimation', [
  transition(':enter', [
    style({
      position: 'absolute'
    }),
    animate('0.5s ease-in-out')
  ]),
  transition('* => *', [
    query(':leave', style({transform: 'translateX(0)', position: 'absolute'}), {optional: true}),
    query(':enter', style({transform: 'translateX(100%)', position: 'absolute'}), {optional: true}),

    group([
      query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)', position: 'absolute'})), {optional: true}),
      query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)', position: 'absolute'})), {optional: true})
    ])
  ])
]);

export const FadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate('1s', style({opacity: 1}))
  ]),
]);

export const SlideInOutAnimation = trigger('slideInOutAnimation', [
  state('*', style({
    position: 'fixed',
    top: '50px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  })),

  transition(':enter', [
    style({
      right: '-400%',
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }),
    animate('3s ease-in-out', style({
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }))
  ]),

  transition(':leave', [
    animate('3s ease-in-out', style({
      right: '-400%',
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }))
  ])
]);
