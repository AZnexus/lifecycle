import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription; // EL $ es per indicar que es un Observable. O a vegades es una S majúscula.

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');

    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`)); // Si no es tanca, anirà fent Ticks cada cop que es premi el botó de Toggle. Aixo es farà al OnDestroy()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe(); // Aixo cancela la subscripció del Observable. TAl i com està ara j ano hi haurà varis a la vegada a mesura que apretis el Toggle. Quan es torni a premer el Togge ja es farà el unsubscribe()
    // Aquest lloc també es on s'hauria de destruir els eventListeners i similars.
  }
}
