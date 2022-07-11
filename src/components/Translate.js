import React, { useState, useEffect } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
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
      <Input label="Enter some text" onChange={setText} />
      <Dropdown
        label="language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <div className="result">
        <hr></hr>
        <h4>Output</h4>
        <p>{translated}</p>
      </div>
    </div>
  );
};

export default Translation;
