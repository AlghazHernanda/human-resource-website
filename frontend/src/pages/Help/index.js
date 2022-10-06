import React, { PureComponent } from 'react';
import styles from './style.module.css';

export default  function Help() {
    return (
        <div className='content'>
            <div className={ styles.introduction }>
                <h2>Hello, Anya Forger</h2>
            </div>
            <div className={ styles.services }>
                <h4>Ini adalah halaman bantuan</h4>
                <h5>Jika perlu bantuan, silakan hubungi:</h5>
                <ul>
                    <li>admin@alpha.co.id</li>
                    <li>+021 69420 556</li>
                </ul>
            </div>
            
        </div>
    )
}