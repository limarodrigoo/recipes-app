import { Carousel, Container, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function RecomendationCarousel({ data, limit }) {
  const [type, settype] = useState('');

  const typeOfRecomendation = Object.keys(data)[0];

  useEffect(() => {
    if (typeOfRecomendation === 'drinks') {
      settype('Drink');
    } else {
      settype('Meal');
    }
  }, [typeOfRecomendation]);

  const recomendations = data[typeOfRecomendation].slice(0, limit);
  console.log(recomendations[0][`str${type}Thumb`]);
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <Container>
            <p data-testid="0-recomendation-title">{ recomendations[0][`str${type}`] }</p>
            <Image
              src={ recomendations[0][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[0][`str${type}`] }
              data-testid="0-recomendation-card"
            />
          </Container>
          <Container>
            <p
              data-testid="1-recomendation-title"
            >
              { recomendations[1][`str${type}`] }

            </p>
            <Image
              src={ recomendations[1][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[1][`str${type}`] }
              data-testid="1-recomendation-card"
            />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <p
              data-testid="2-recomendation-title"
            >
              { recomendations[2][`str${type}`] }

            </p>
            <Image
              src={ recomendations[2][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[2][`str${type}`] }
              data-testid="2-recomendation-card"
            />
          </Container>
          <Container>
            <p data-testid="3-recomendation-title">{ recomendations[3][`str${type}`] }</p>
            <Image
              src={ recomendations[3][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[3][`str${type}`] }
              data-testid="3-recomendation-card"
            />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <p data-testid="4-recomendation-title">{ recomendations[4][`str${type}`] }</p>
            <Image
              src={ recomendations[4][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[4][`str${type}`] }
              data-testid="4-recomendation-card"
            />
          </Container>
          <Container>
            <p data-testid="5-recomendation-title">{ recomendations[5][`str${type}`] }</p>
            <Image
              src={ recomendations[5][`str${type}Thumb`] }
              className="d-block w-100"
              style={ { maxWidth: '10rem' } }
              alt={ recomendations[5][`str${type}`] }
              data-testid="5-recomendation-card"
            />
          </Container>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

RecomendationCarousel.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  limit: PropTypes.number.isRequired,
};
