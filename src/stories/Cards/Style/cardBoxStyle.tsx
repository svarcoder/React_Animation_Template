import styled from "styled-components";

export const Cardbox = styled.div`

.box-item {
    max-width: 33.33333%;
    border-radius: 8px;
    margin: 50px auto;
}
.box-info {
    padding: 66px 20px;
    position: relative;
    z-index: 1;
    background-color: #f4f4f4;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
}
.box-info h6 {
    margin-top: 22px;
    line-height: 24px;
    letter-spacing: .1em;
    font-size: .875rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif"
}

.box-info p {
    color: #555555;
    margin-top: 15px;
    font-size: .875rem;
}

     .info-box__shadow:hover {
    box-shadow: 0 20px 60px 0 rgba(0,0,0,.4);
    -webkit-transform: translate(0,-10px);
    transform: translate(0,-10px);
}
    
    [class*=info-box__shadow]{
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
`


// export const CardHoverContainer = styled.body`
// @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
// @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
// font-family: 'Lato', sans-serif;
// background-color:#eaeaea;
// * {
//   box-sizing: border-box;
// }
// .title{
//   font-size:60px;
//   padding:20px 0px;
// }
// .containerHover{
//   width:900px;
//   margin:0px auto;
// }
// /* Float three columns side by side */
// .column {
//   float: left;
//   width: 33.33%;
//   padding: 0 10px;
// }

// /* Remove extra left and right margins, due to padding */
// .row {margin: 0 -5px;}

// /* Clear floats after the columns */
// .row:after {
//   content: "";
//   display: table;
//   clear: both;
// }

// /* Responsive columns */
// @media screen and (max-width: 700px) {
  
//  .container{
//   width: 100%;
// }
  
//   .column {
//     width: 100%;
//     display: block;
//     margin-bottom: 20px;
//   }
// }

// /* Style the counter cards */
// .card {
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   padding: 5px;
//   text-align: center;
//   background-color: #fff;
//   border-radius:10px;
//   cursor:pointer;
// }
// .card .profile{
//    border-radius:10px;
//    transition: 0.2s;
// }
// .card:hover .profile{
//   transform:scale(1.4);
//   border-top-right-radius:50px;
//   border-top-left-radius:50px;
// }

// .card .content{
//   width:100%;
//   height:100%;
//   position:relative;
//   overflow:hidden;
// }
// .card .content .back{
//   position:absolute;
//   width:100%;
//   height:100%;
//   background-color: #f1f1f1e6;
//   transition:1s;
  
//   z-index:1;
//   padding:10px;
// }

// .from-left{
//   top:0;
//   left:-100%;
// }
// .card:hover .content .from-left {
//    left:0%;
// }

// .from-bottom{
//   top:100%;
//   left:0;
// }
// .card:hover .content .from-bottom {
//    top:0%;
// }

// .from-right{
//   top:0%;
//   right:-100%;
// }
// .card:hover .content .from-right {
//    right:0;
// }

// .card .content .back h3{
//   font-size:15px;
//   letter-spacing:2px;
// }
// .card .content .back .tem-img{
//   border-radius:100%;
// }

// .card .content .back .des{
//   font-size:13px;
//   padding:20px 0px;
// }
// .card .content .back .social-icon{
//   list-style:none;
//   margin:0px;
//   padding:0px;
// }
// .card .content .back .social-icon li{
//   display:inline-block;
// }

// .card .content .back .social-icon li a{
//   display:block;
//   background:#333;
//   color:#fff;
//   width:40px;
//   height:40px;
//   text-align:center;
//   line-height:40px;
//   border-radius:100%;
// }


//   `;

//   export const Center = styled.div`
//   text-align:center;
//   `
  