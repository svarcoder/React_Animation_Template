import { Cardbox } from "./Style/cardBoxStyle";
import { CardHoverContainer, Center } from "./Style/cardHoverStyles";
import { SimpleCardBody } from "./Style/simpleCardCss";
import "./Style/otCardStyle.tsx";
import { OtCardStyle } from "./Style/otCardStyle";
import { LoaingStyle } from "./Style/loadingStyle";
import "./Style/cardHoverEffectStyled.tsx";
import { CardHoverEffectBody } from "./Style/cardHoverEffectStyled";
import { CardConatiner } from "./Style/cardStyle";
import { AnimatedCard } from "./Style/animatedCardStyle";

interface ButtonProps {
  title: string;
  content: string;
}

export const CardBox = ({ title, content, ...props }: ButtonProps) => {
  return (
    <Cardbox>
      <div className="box-item">
        <div className="box-info info-box__shadow">
          <div className="box-icon">
            {" "}
            <i className="fal fa-anchor"></i>{" "}
          </div>
          <h6>{title}</h6>
          <p>{content}</p>
        </div>
      </div>
    </Cardbox>
  );
};

interface CardHoverProps {
  title: string;
  imgLink: string;
  score: number;
  player1: string;
  player2: string;
  player1ImageLink: string;
  player2ImageLink: string;
  description: string;
  animation?: "from-right" | "from-bottom" | "from-left";
}

export const CardHover = ({
  title,
  imgLink,
  score,
  player1,
  player2,
  player1ImageLink,
  description,
  player2ImageLink,
  animation = "from-right",
}: CardHoverProps) => {
  return (
    <CardHoverContainer>
      <div className="containerHover">
        <Center>
          <h1 className="title">Pure CSS Responsive Card Hover Effect</h1>
        </Center>

        <div className="row">
          <div className="column">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={imgLink} alt="Neymar" />
                  <h2>{title}</h2>
                </div>
                <div className={`back ${animation}`}>
                  <h2>{title}</h2>
                  <h3>{score}</h3>
                  <h3>
                    {player1} | {player2}{" "}
                  </h3>
                  <img className="tem-img" src={player1ImageLink} alt="" /> &nbsp;
                  <img className="tem-img" src={player2ImageLink} alt="" /> <br />
                  <p className="des">{description}</p>
                  <ul className="social-icon">
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Center>
        <a target="_blank" href="https://insidethediv.com">
          Find Me
        </a>
      </Center>
    </CardHoverContainer>
  );
};

interface SimpleCardProps {
  title: string;
  subtitle: string;
  content: string;
  imgLink: string;
}
export const SimpleCard = ({ title, subtitle, content, imgLink }: SimpleCardProps) => {
  return (
    <SimpleCardBody>
      <div className="card">
        <div className="image">
          <img src={imgLink} />
        </div>
        <div className="details">
          <div className="center">
            <h1>
              {title}
              <br></br>
              <span>{subtitle}</span>
            </h1>
            <p>{content}</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SimpleCardBody>
  );
};

interface OtCardProps {
  imgLink?: string;
  title?: string;
  description?: string;
}

export const OtCard = ({ imgLink, title, description }: OtCardProps) => {
  return (
    <OtCardStyle>
      <div className="containerHoverOt">
        <div className="card">
          <div className="imgBx">
            <img src={imgLink} alt="old chair outside" />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </OtCardStyle>
  );
};

interface LoaderProps {
  type?: "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7" | "type8" | "type9" | "type10";
}

const typeOfLoader = (type: any) => {
  switch (type) {
    case "type1":
      return (
        <div className="load-wrapp">
          <div className="load-1">
            <p>Loading 1</p>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      );
      break;
    case "type2":
      return (
        <div className="load-wrapp">
          <div className="load-2">
            <p>Loading 2</p>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      );
      break;
    case "type3":
      return (
        <div className="load-wrapp">
          <div className="load-3">
            <p>Loading 3</p>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      );
      break;
    case "type4":
      return (
        <div className="load-wrapp">
          <div className="load-4">
            <p>Loading 4</p>
            <div className="ring-1"></div>
          </div>
        </div>
      );
      break;
    case "type5":
      return (
        <div className="load-wrapp">
          <div className="load-5">
            <p>Loading 5</p>
            <div className="ring-2">
              <div className="ball-holder">
                <div className="ball"></div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "type6":
      return (
        <div className="load-wrapp">
          <div className="load-6">
            <p>Loading 6</p>
            <div className="letter-holder">
              <div className="l-1 letter">L</div>
              <div className="l-2 letter">o</div>
              <div className="l-3 letter">a</div>
              <div className="l-4 letter">d</div>
              <div className="l-5 letter">i</div>
              <div className="l-6 letter">n</div>
              <div className="l-7 letter">g</div>
              <div className="l-8 letter">.</div>
              <div className="l-9 letter">.</div>
              <div className="l-10 letter">.</div>
            </div>
          </div>
        </div>
      );
      break;
    case "type7":
      return (
        <div className="load-wrapp">
          <div className="load-7">
            <p>Loading 7</p>
            <div className="square-holder">
              <div className="square"></div>
            </div>
          </div>
        </div>
      );
      break;
    case "type8":
      return (
        <div className="load-wrapp">
          <div className="load-8">
            <p>Loading 8</p>
            <div className="line"></div>
          </div>
        </div>
      );
      break;
    case "type9":
      return (
        <div className="load-wrapp">
          <div className="load-9">
            <p>Loading 9</p>
            <div className="spinner">
              <div className="bubble-1"></div>
              <div className="bubble-2"></div>
            </div>
          </div>
        </div>
      );
      break;
    case "type10":
      return (
        <div className="load-wrapp">
          <div className="load-10">
            <p>Loading 10</p>
            <div className="bar"></div>
          </div>
        </div>
      );
      break;
  }
};
export const Loading = ({ type = "type1" }: LoaderProps) => {
  return (
    <LoaingStyle>
      <div className="content">
        <h3>CSS3 Loading animations</h3>
        {typeOfLoader(type)}
      </div>
      <div className="clear"></div>
    </LoaingStyle>
  );
};

interface CardHoverEffectProps {
  background?: string;
  cardBackgroundColor?: string;
  imgLink: string;
  title?: string;
  description?: string;
  buttonlabel?: string;
}

export const CardHoverEffect = ({
  background = "#333",
  cardBackgroundColor,
  imgLink,
  title,
  description,
  buttonlabel,
  ...props
}: CardHoverEffectProps) => {
  return (
    <CardHoverEffectBody background={background} {...props}>
      <div className="containerHover">
        <div className="cardHover">
          <div className="face face1">
            <div className="content">
              <img src={imgLink} />
              <h3>{title}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{description}</p>
              <a href="#">{buttonlabel}</a>
            </div>
          </div>
        </div>
      </div>
    </CardHoverEffectBody>
  );
};

interface AnimatedCardProps {
  size?: "small" | "medium" | "large";
  headline: string;
  content: string;
}
export const Animatedcard = ({ size = "medium", headline, content }: AnimatedCardProps) => {
  return (
    <AnimatedCard fontSize={size}>
      <div className="animated animatedbody">
        <div className="cardBox">
          <div className="card">
            <h2>Animated card</h2>
            <span>Hover Me</span>
            <div className="content">
              <h3>{headline}</h3>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

interface CardProps {
  label: string;
}
export const Card = ({ label, ...props }: CardProps) => {
  return (
    <CardConatiner>
      <div className="card" {...props}>
        {label}
      </div>
    </CardConatiner>
  );
};
