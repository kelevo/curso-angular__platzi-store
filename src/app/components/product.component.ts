import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    // Aqui se construye el componente
    constructor() {
        console.log('1._ constructor');
    }

    // Ver lo que se ejecuta -> Detecta los cambios (detecta estado anteior y nuevo)
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2._ ngOnChanges');
    //     console.log(changes);
    // }

    // Este metodo se ejecuta solo una vez y es cuando el componente ya esta puesto en pantalla
    // En este metodo es una buena practica hacer llamadas a servicios de datos
    ngOnInit() {
        console.log('3._ ngOnInit');
    }

    // Tambien detecta cambios pero tambien hace deteccion automatica de cambios pero a nuestro modo
    ngDoCheck() {
        console.log('4._ ngDoCheck');
    }

    // Se ejecuta cuando el elemento es removido de la interfaz
    ngOnDestroy() {
        console.log('5._ ngOnDestroy');
    }

    addCart() {
        console.log('Aniadir al carrito');
        // Emitimos de acuerdo al valor colocado en la parte de arriba
        this.productClicked.emit(this.product.id);
    }

}