import styled from "styled-components";

const Wrapper = styled.div`
.table {
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    line-height: 1.18;
    margin: 100px auto;
    max-width: 800px;
    min-width: 500px;
    width: 100%;
    
    th,
    td {
        border-right: 1px solid #fff;
        font-size: 1.4rem;
        padding: 18px 20px 16px 13px;
    }
    
    td {
        background-color: #1B75D0;
        border-top: 1px solid #fff;
        color: #fff;
        min-width: 140px;
    }
}

`
export default Wrapper

