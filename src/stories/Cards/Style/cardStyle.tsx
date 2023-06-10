import styled from "styled-components";

export const CardConatiner = styled.div`

* {
    font-family: sans-serif;
  }
.card{
    width: 200px;
    margin: 20px;
    height: 150px;
    border: 1px solid #ccc;
    padding: 10px;
    transition: box-shadow 0.2s ease-in-out, transform 0.35s ease-in-out;
}
  
  .card:hover {
    box-shadow: 0 11px 11px 0 rgba(0, 0, 0,.16);
    transform: translateY(-5px);
  }
  `;