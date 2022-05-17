import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './movielist.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import '../button/button.scss'
import tmdbApi, { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import MovieCrad from '../movie-card/MovieCrad'

function MovieList(props) {
    const [item, setItem] = useState([])
    useEffect(() => {
        const getList = async () => {
            let responce = null;
            const params = {};
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        responce = await tmdbApi.getMoviesList(props.type, { params })

                        break;
                    default:
                        responce = await tmdbApi.getTvList(props.type, { params })

                }
            } else {
                responce = await tmdbApi.similar(props.category, props.id)
            }
            setItem(responce.results)
        }
        getList()
    }, [])

    return (
        <div className='movie-list'>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    item.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCrad item={item}
                                category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList
