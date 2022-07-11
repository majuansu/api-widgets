import React, { useState, useEffect } from "react";
import InputSearch from "./InputSearch";
import Dropdown from "./Dropdown";
import axios from "axios";
import google from "../apis/google";

// Data: language options
const options = [
  { label: "Arabic", value: "ar" },
  { label: "Dutch", value: "nl" },
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Hindi", value: "hi" },
  { label: "Italian", value: "it" },
];

const Translation = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0]);
  const [translated, setTranslated] = useState("");

  // Get results from API
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await google.post(
        "/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return (
    <div className="translation ui container ">
      <InputSearch title="text" onChange={setText} />
      <Dropdown
        title="language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <div className="result">
        <hr></hr>
        <h3>Output</h3>
        <p>{translated}</p>
      </div>
    </div>
  );
};

export default Translation;
