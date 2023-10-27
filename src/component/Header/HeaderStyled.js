import styled from "styled-components";

const Wrapper = styled.div`
.header {
    border-bottom: 2px solid grey;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
    display: flex;
    justify-content: center;
    padding: 20px;
}
.header__list {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
}
.header__item:not(:last-child) {
    margin-right: 15px
}
.header__item-link {
    color: #313131;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.63;
    text-decoration: none;
    text-transform: uppercase;
}
.active-link {
  color: red  
}
`
export default Wrapper
