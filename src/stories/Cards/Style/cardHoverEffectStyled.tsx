import styled from "styled-components";

export const CardHoverEffectBody = styled.div<any>`
    background: ${(props) =>props.background};
    display: flex;
    justify-content: center;
    align-items: center;

.containerHover{
    position: relative;
    display: flex;
    justify-content: space-evenly;
}

.containerHover .cardHover{
    position: relative;
    cursor: pointer;
}

.containerHover .cardHover .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.containerHover .cardHover .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.containerHover .cardHover:hover .face.face1{
    background: #ff0057;
    transform: translateY(0);
}

.containerHover .cardHover .face.face1 .content{
    opacity: 0.2;
    transition: 0.5s;
}

.containerHover .cardHover:hover .face.face1 .content{
    opacity: 1;
}

.containerHover .cardHover .face.face1 .content img{
    max-width: 100px;
}

.containerHover .cardHover .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.containerHover .cardHover .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

 .containerHover .cardHover:hover .face.face2{
    transform: translateY(0);
}

.containerHover .cardHover .face.face2 .content p{
    margin: 0;
    padding: 0;
}

.containerHover .cardHover .face.face2 .content a{
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
}

.containerHover .cardHover .face.face2 .content a:hover{
    background: #333;
    color: #fff;
}

`;