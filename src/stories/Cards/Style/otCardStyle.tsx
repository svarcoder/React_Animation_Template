import styled from "styled-components";

export const OtCardStyle = styled.body`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serf;
}


  display: flex;
  justify-content: center;
  align-items: center;
  background: #16384c;


.containerHoverOt {
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}

.containerHoverOt .card {
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.containerHoverOt .card:hover {
  height: 420px;
}

.containerHoverOt .card .imgBx {
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.containerHoverOt .card .imgBx img {
  max-width: 260px;
  border-radius: 4px;
}

.containerHoverOt .card .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.containerHoverOt .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px; //changed this from px to %; will need to be adjusted according to the size of the photo
  transition-delay: 0.3s;
}

`;