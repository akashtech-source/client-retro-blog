import React, { useEffect, useState } from 'react';
import './Header.css';
import TextTransition, { presets } from "react-text-transition";
import headerImage from '../../../images/undraw_Having_fun_re_vj4h.svg';

const TEXTS = [
    "Share",
    "Your",
    "Feeling",
    "To us!"
  ];

const Header = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          2000 // every n seconds
        );
        return () => clearTimeout(intervalId);
      }, []);


    return (
        <section>
            <div className="row container-fluid">
                <div className="col-md-6">
                    <h1 className="hero-text text-warning">
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    </h1>
                    <h5 className="mt-4 slogan text-secondary">The first thing you learn when you're blogging is that people are one click away from leaving you.
                    </h5>
                    <div class="stage mt-5">
                        <button class="box bounce-1 btn btn-danger fs-5">Learn More</button>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="">
                    <img className="headerImage img-fluid mt-5" src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;