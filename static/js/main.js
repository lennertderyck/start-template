import {callerName} from './common.js';
import {sesamCollapse, sesam} from 'https://unpkg.com/sesam-collapse';

const status = new callerName('main');

const app = {
    initialize() {
        status.init()
        
        sesamCollapse.initialize();
    },

    cached() {
        status.add('cached');
    },
}

app.initialize();