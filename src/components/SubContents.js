import { Component } from "react";

import styles from './SubContents.module.css';

class SubContents extends Component {
    render() {
        return (
            <div className={ styles.yellowBlock }></div>            
        )
    }
}

export default SubContents;