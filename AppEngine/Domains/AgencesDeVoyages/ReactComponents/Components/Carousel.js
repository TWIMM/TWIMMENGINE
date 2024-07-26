import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Carousel.css'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Headerbutton from './Headerbutton'
import Play from '../img/homecartes.png'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import Headermobile from '../Mobilecomponents/Headermobile'
import { gsap } from 'gsap';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Carousel() {
  const imageRef = useRef(null)
  const [screen_width, setWidth] = useState(window.screen.width);
  const [screen_height, setHeight] = useState(window.screen.height);
  const [translateTo, setTranslateTo] = useState(0);
  const [description, setDescription] = useState('Alaska , Canada');
  const [isTime, setIsTime] = useState(false)
  const [carouselControlClass, setControlClass] = useState('slidetitle3active')
  const [indexCarousel, setIndex] = useState('01/02')
  const [carouselControlClass2, setControlClass2] = useState('slidetitle3rightactive')
  const [arrayOfTitle, setArrayOfTitle] = useState(['Le n°1 des cartes prépayées', '+ 2000% par carte'])
  const [arrayOfImg, setImg] = useState(['../img/8.png', '../img/4.png'])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideClassName, setSlideClassName] = useState('img1')
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const playRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(playRef.current, {
      duration: 1,
      y: -25,
      ease: "power1.inOut"
    })
      .to(shadowRef.current, {
        duration: 1,
        width: '100px',
        height: '15px',
        ease: "power1.inOut"
      }, '-=1');

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    //change the title after 20s
    const changeTitle = (title) => {
      setDescription(splitText(title, 2))
    }

    if (isTime === false) {
      changeTitle(arrayOfTitle[1])
      setIndex('01/02')
      setTimeout(() => { setIsTime(true) }, 22000)
    } else if (isTime === true) {
      changeTitle(arrayOfTitle[0])
      setIndex('02/02')
      setTimeout(() => { setIsTime(false) }, 22000)
    }

  }, [isTime])

  const splitText = (text, wordsPerLine) => {
    const words = text.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i += wordsPerLine) {
      result.push(words.slice(i, i + wordsPerLine).join(' '));
    }

    return result.join('\n');
  };

  const Next = () => {
    setCurrentIndex((index) => (index + 1) % arrayOfImg.length)
    setSlideClassName(`img${currentIndex}`)
    setIsTime(!isTime)
  }

  const Prev = () => {
    setCurrentIndex((index) => (index - 1 + arrayOfImg.length) % arrayOfImg.length)
    setSlideClassName(`img${currentIndex}`)
    setIsTime(!isTime)
  }

  return (
    <div
      onMouseEnter={() => { setControlClass('slidetitle3'); setControlClass2('slidetitle3right') }}
      onMouseLeave={() => { setControlClass('slidetitle3active'); setControlClass2('slidetitle3rightactive') }}
      className='slidercontainer'>
      <div className='headercontain'>
        <Headerbutton />
      </div>
      <div className='containmobileheader'>
        <Headermobile />
      </div>
      <div className='slider1'>
        <div className='slidetitle'>
          <p style={{ fontSize: '15px', fontWeight: "bold" }} className=''>
            Meilleurs cartes
          </p>
          <h2 className=''>
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
        <div className='slidetitleplay'>
          <img className='play' src={Play} ref={playRef} />

        </div>
        <div className='slidetitle2'>
          <h1 className=''>
            {indexCarousel}
          </h1>
        </div>
        <img className={slideClassName} ref={imageRef} style={{ width: '100%' }} />
      </div>
      {isDesktop && (
        <>
          <div className={carouselControlClass}>
            <ArrowBackIcon onClick={Prev} sx={{ color: 'rgb(236, 159, 6)', fontSize: '40px' }} />
          </div>
          <div className={carouselControlClass2}>
            <ArrowForwardIcon onClick={Next} sx={{ color: 'rgb(236, 159, 6)', fontSize: '40px' }} />
          </div>
        </>
      )}
      <div className='backForward'>
        <ArrowBackIcon onClick={Prev} sx={{ color: 'rgb(236, 159, 6)', fontSize: '30px' }} />
        <ArrowForwardIcon onClick={Next} sx={{ color: 'rgb(236, 159, 6)', fontSize: '30px' }} />
      </div>
      <div className='slidetitle4'></div>
      <div className='subtitlelogo'>
        <FacebookIcon sx={{ fontSize: '35px', color: 'rgb(255, 255, 255)', }} />
        <InstagramIcon sx={{ fontSize: '35px', color: 'rgb(255, 255, 255)' }} />

      </div>
    </div>
  )
}
