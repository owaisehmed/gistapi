import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserGist, getUserList } from "../redux/userActions";

const Search = () => {
  const dispatch = useDispatch();

  //This enables the input to only search when 'Enter' key is pressed so as to limit the API calls on every onChange
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        dispatch(getSpecificUserGist(e.target.value));
      } else dispatch(getUserList());
    }
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onKeyDown={handleKeyDown}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
