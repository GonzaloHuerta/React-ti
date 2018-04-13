import React from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
const Empty = () =>
<div>
  <Header />
    <section class="items-section">
        <div class="items-section-body">
            <div class="dimmer">
                No hay items en Mi Lista
            </div>
        </div>
    </section>
</div>


export default Empty
