import { module as BaseModule } from 'modujs';
 
export default class extends BaseModule {
    constructor(m) {
        super(m);
    }

    init() {
        
    }
    
    launch(way, obj) {
        console.log(obj)
    }
 
}