import React from 'react';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Loading = ({alt,clase}) =>

<section class="items-section">
    <div class="items-section-body">
        <div class="dimmer">
            <div class="loading">
                <i class="mdi mdi-loading" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</section>


export default Loading
