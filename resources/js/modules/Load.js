
 



/**
 * Reference:
 * 
 * - {@link https://github.com/locomotivemtl/locomotive-boilerplate/blob/master/assets/scripts/modules/Load.js}
 */


import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const load = new modularLoad({
            enterDelay: 0,
            transitions: {
                customTransition: {}
            }
        });

        load.on('loaded', (transition, oldContainer, newContainer) => {
            console.log('loaded!')
            this.call('destroy', oldContainer, 'app');
            this.call('update', newContainer, 'app');
        });
    }
}