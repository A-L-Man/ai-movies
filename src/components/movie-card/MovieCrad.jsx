import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './moviecard.scss'
import '../button/button.scss'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/tmdbApi'

const MovieCrad = props => {
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id
    const bgImg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    return (
        <Link to={link}>
            <div className="movie-card" style={
                {
                    backgroundImage: `url(${bgImg})`
                }
            }>
                <Button>
                    <i className='bx bx-play'></i>
                </Button>

            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

MovieCrad.propTypes = {

}

export default MovieCrad