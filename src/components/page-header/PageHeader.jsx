import React from 'react'
import PropTypes from 'prop-types'

import './pageheader.scss'

import bg from '../../assets/footer-bg.jpg'

const PageHeader = props => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='page-header'>
            <h2>{props.children}</h2>
        </div>
    )
}

PageHeader.propTypes = {}

export default PageHeader